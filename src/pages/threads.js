import React,{useEffect, useState} from 'react';
import {Input,Form,Button} from 'antd';
import axios from 'axios'

const {TextArea} = Input;
function Register(props) {
    async function onFinish(values) { 
        const json = {"titlenum":props.titlenum,"title":props.title,
            "name":values.name,"comment":values.comment,"code":values.code};        
        console.log(json);
        await axios.post("http://localhost:8080/apis/register/"+props.titlenum,json);
    };
    return (
        <>
            <Form onFinish={onFinish}>
                <Form.Item name="name" label="お名前">
                    <Input />
                </Form.Item>
                <Form.Item name="comment" label="本文：">
                    <TextArea></TextArea>
                </Form.Item>
                <Form.Item name="code" label="コード">
                    <TextArea></TextArea>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType='submit'>送信</Button>
                </Form.Item>
            </Form>
        </>
    )
}
function TopPage(props) {    
    const [value,setValue] = useState([]);
    const [title,setTitle] = useState("");
    const num = 2;
    useEffect(()=>{
        async function Mount() {
            const json = await axios.get("http://localhost:8080/apis/articles/"+num);                                           
            console.log(json.data.title);
            setTitle(json.data.title);    
            const field = json.data.comments.map(res => {
                return (
                    <>
                    お名前({res.name})：：日付{res.date}
                    {res.comment}
                    {res.code}
                    <hr />
                    </>
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
            <p>{value}</p>
            <a href='/'>もどる</a>
        </>
    )
}
export default TopPage;
