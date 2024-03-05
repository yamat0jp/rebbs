import React from 'react';
import {Input,Form,Button} from 'antd';

const {TextArea} = Input;
function Register() {
    const onFinish = values => console.log(values);
    return (
        <>
            <Form onFinish={onFinish}>
                <Form.Item name="name" label="お名前">
                    <Input />
                </Form.Item>
                <Form.Item name="text" label="本文：">
                    <TextArea></TextArea>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType='submit'>送信</Button>
                </Form.Item>
            </Form>
        </>
    )
}
function TopPage() {
    const title = {"title":""};
    var list = [];
    const data = list.map((json)=>
        <>
            お名前：{json.name}：：日付{json.date}
            {json.comment}
            {json.code}
            <hr />
        </>
    );
    return (
        <>
            <Register />
            {title.title}
            {data}
            <a href='/'>もどる</a>
        </>
    )
}
export default TopPage;
