import React, { useState } from 'react';
import { Input, Space, Radio } from 'antd';
import { Link } from 'gatsby';
import axios from 'axios';
import parse from 'html-react-parser';
import Highlight from 'react-highlight';

const { Search } = Input;

function SearchPage() {  
  const [title,setTitle] = useState("");  
  const [data,setData] = useState("result");  
  const [value,setValue] = useState("title");
  async function onSearch(values) {     
    const json = {"word":values,"title":value};    
    console.log(json);
    const res = await axios.post('http://localhost:8080/apis/search/', json);    
    if (res.data.response.length === 0) {
      setData("no result");
    } else {
      setData(res.data.response.map(user => {
        setTitle(res.data.title);
        return (
          <>            
            {title}<br />
            ({user.cmnumber}){user.name}{user.date}<br />
            <p>{parse(user.comment)}</p>
            <Highlight className='delphi'>{parse(user.code)}</Highlight>
            <hr />
          </>
        )
      }));
    };
  };
  function onChange(e) {
    setValue(e.target.value);
  }
  return (
      <div>
      <p>検索ページ</p>
      <Space direction="vertical">                
          <Radio.Group onChange={onChange} defaultValue="a">
          <Radio.Button value="title">タイトル</Radio.Button>
          <Radio.Button value="text">本文から</Radio.Button>
          </Radio.Group>                  
          <Search placeholder="input search text" onSearch={onSearch} 
            enterButton />        
      </Space>      
      <hr />
      {title}
      {data}<br />
      <Link to="/">戻る</Link>
      </div>
  )
}
export default SearchPage;