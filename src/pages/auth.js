import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Form, Input, Checkbox, Button } from 'antd';

export default function LoginPage() {
  const firebaseConfig = {
    apiKey: "AIzaSyAEUN0L9MAtCGVgz-y7jmLwLkU6w4xRChs",
    authDomain: "react-firebase-9329b.firebaseapp.com",
    databaseURL: "https://react-firebase-9329b.firebaseio.com",
    projectId: "react-firebase-9329b",
    storageBucket: "react-firebase-9329b.appspot.com",
    messagingSenderId: "398030015430",
    appId: "1:398030015430:web:84119196a398fc554ac0c7",
    measurementId: "G-MLMF0EDPRP"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [state, setState] = useState("no login...");

  onAuthStateChanged(auth, user => {
    if (user) setState(user.email + ' logined !');
  });
  function onFinish(values) {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(user => (user.email + ' Sign in successfully.')
      ).catch(error => {
        console.log(error);
        setState("fail to login ...");
      });
  }
  function onFinishFailed(errorInfo) {
    signOut(auth);
    setState("no login...");
    console.log('Failed:', errorInfo);
  }
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {state}
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
