import React, { useState } from 'react'
import { Input, Space, Radio } from 'antd';
import { Link } from 'gatsby'
import axios from 'axios'

const { Search } = Input;

function SearchPage() {
  const [value,setValue] = useState("");
  const [state,setState] = useState("title");
  
  async function onSearch() {
    const json = {"word": value};    
    const {data} = await axios.post('http://localhost:8080/apis/search', json);
    setValue(data);
  };
  function onHandle(e) {
    setValue(e.target.value);
  };
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
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
            onChange={onHandle} enterButton value={value} />
      </Space>
      <br />
      <Link to="/">戻る</Link>
      </div>
  )
}
export default SearchPage;