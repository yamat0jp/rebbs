import React,{useState} from 'react';
import {Input,Form,Button} from 'antd';
import axios from 'axios'

const {TextArea} = Input;
function Register(props) {
    async function onFinish(values) { 
        const json = {"title":props.title,"name":values.name,"comment":values.comment+values.code};
        console.log(values);    
        await axios.post("http://localhost:8080/apis/register",values);
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
    async function Mount() {
        const json = await axios.get("http://localhost:8080/apis/articles/2");                   
        const comments = json.comments;
        setTitle(json.title);
        console.log(comments);    
        const list = [];
        for (var i=0;i<comments.length;i++) list.push([i,comments[i]]);
        const field = list.map(res => {
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
    return (
        <>
            <Register />
            {title}
            <p>{value}</p>
            <a href='/'>もどる</a>
        </>
    )
}
export default TopPage;
