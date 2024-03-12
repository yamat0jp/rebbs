import React,{useState} from 'react';
import { Link } from 'gatsby'
import { Input, Form, Button } from 'antd'
import axios from 'axios';

const { TextArea } = Input;
function FormComponent() {
    return (
        <>
        <Form.Item label="ご意見・ご要望" name="voice">
            <TextArea rows={4} defaultValue="投稿者名など:
                相談内容:
                その他:" />                            
        </Form.Item>
        <Form.Item label="">
            <Button type="primary" htmlType="submit">
                submit
            </Button>
        </Form.Item>
        </>
    )
}
 function HelpPage() {
    const [item,setItem] = useState(<FormComponent />);
    async function onFinish(values) {
        console.log(values);
        setItem(<br />);
        await axios.post("http://localhost:8080/apis/help",values);
    };
    return (
        <>
        <p>訪問者の皆さん<br />
        チャンネルを選択してメッセージを書き残しましょう
        タイトル表示に切り替えると話題の参考になります。各記事には報告ボタンがついており、問題のある投稿を管理人に通報できます。<br />
        以下のフォームから管理人に直接メッセージを送信できます。削除依頼などにお使いください。</p>
        <Form style={{maxWidth: 600}} onFinish={onFinish}>
            {item}
        </Form>
        <Link to="/">戻る</Link>
        </>
    )
}

export default HelpPage;