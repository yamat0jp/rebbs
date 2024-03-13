import React,{useEffect, useState} from 'react';
import {Input,Form,Button} from 'antd';
import axios from 'axios';
import parse from 'html-react-parser';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github-dark.css';
import { Link } from 'gatsby';

const {TextArea} = Input;
const layout = {
    labelCol: {
        span:8,
    },
    wrapperCol:{
        span:16,
    },    
};
function Register(props) {
    async function onFinish(values) { 
        const json = {"titlenum":props.titlenum,"title":props.title,
            "name":values.name,"comment":values.comment,"code":values.code};        
        console.log(json);
        await axios.post("http://localhost:8080/apis/register/"+props.titlenum,json);
    };
    return (
        <>
            <Form {...layout} style={{maxWidth:600,}} onFinish={onFinish}>
                <Form.Item name="name" label="お名前">
                    <Input />
                </Form.Item>
                <Form.Item name="comment" label="本　文：">
                    <TextArea></TextArea>
                </Form.Item>
                <Form.Item name="code" label="コード">
                    <TextArea></TextArea>
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol,offset:8}}>
                    <Button type="primary" htmlType='submit'>送信</Button>
                </Form.Item>
            </Form>
        </>
    )
}
function TopPage() {    
    const [value,setValue] = useState([]);
    const [title,setTitle] = useState("");
    const num = 2;    
    useEffect(()=>{
        async function Mount() {
            const json = await axios.get("http://localhost:8080/apis/articles/"+num);                                           
            console.log(json.data.title);
            setTitle(json.data.title);    
            let count = 0;
            const field = json.data.comments.map(res => {                                               
                count++;
                const comment = parse(res.comment)
                let code;                
                if (res.code !== "") {
                    const item = parse(res.code);
                    code = <Highlight className="delphi">{item}</Highlight>;                    
                };
                if (count % 5 === 0) code = <>{code}<hr /><p style={{textAlign:"center"}}><Link to="/">back</Link></p></>;
                return (                    
                    <li key={count}>
                    お名前({res.name})::日付{res.date}
                    {comment}
                    {code}
                    <hr />
                    </li>
                )
            });
            setValue(field);
        };
        Mount();
    },[]);
    return (
        <>
            <Register title={title} titlenum={num} />
            {title}
            {value}
            <a href='/'>もどる</a>
        </>
    )
}
export default TopPage;
