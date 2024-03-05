import React, { useState } from 'react'
import { Input, Space, Radio } from 'antd';
import { Link } from 'gatsby'
import axios from 'axios'

const { Search } = Input;

function SearchPage() {  
  const [state,setState] = useState("title");
  const [data,setData] = useState("result");
  
  async function onSearch(values) {
    const json = {"word":values,"title":state};
    console.log(json);    
    const response = await axios.post('http://localhost:8080/apis/search/', json);
    if (response === "") {
      setData("no result");
    } else {
      setData(response);
    };
  };
  function onChange(e) {
    if (e.target.value === "a") {
      setState("title");
    } else {
      setState("text");
    };
  };
  return (
      <div>
      <p>検索ページ</p>
      <Space direction="vertical">                
          <Radio.Group onChange={onChange} defaultValue="a">
          <Radio.Button value="a">タイトル</Radio.Button>
          <Radio.Button value="b">本文から</Radio.Button>
          </Radio.Group>        
          {state}        
          <Search placeholder="input search text" onSearch={onSearch} 
            enterButton />        
      </Space>
      <br />
      {data}<br />
      <Link to="/">戻る</Link>
      </div>
  )
}
export default SearchPage;