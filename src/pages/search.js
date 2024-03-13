import React, { useState } from 'react';
import { Input, Space, Radio } from 'antd';
import { Link } from 'gatsby';
import axios from 'axios';
import parse from 'html-react-parser';
import Highlight from 'react-highlight';

const { Search } = Input;

function SearchPage() {    
  const [data,setData] = useState("result");  
  const [value,setValue] = useState("title");
  async function onSearch(values) {     
    const json = {"word":values,"title":value};        
    const res = await axios.post('http://localhost:8080/apis/search/', json);            
    if (res.data.response.length === 0) {      
      setData("no result");
    } else {
      let count = 0;
      setData(res.data.response.map(user => {                
        count++;                
        let item;
        if (user.code !== "") {
          const code = parse(user.code);
          item = <Highlight className='delphi'>{code}</Highlight>;        
        } else {
          item = <></>;
        }
        if (count % 5 === 0) item = <div>{item}<hr /><p style={{textAlign:"center"}}><Link to="/">back</Link></p></div>;
        return (
          <div key={count}>                        
            (<Link to={"/threads/"+user.number}>{user.db}-{user.number}</Link>)
            {user.name}{user.date}<br />
            <div>{parse(user.comment)}</div>
            <div>{item}</div>
            <hr />
          </div>
        )
      }));
    };
  };
  return (
      <div>
      <p>検索ページ</p>
      <Space direction="vertical">                
          <Radio.Group onChange={(e) => setValue(e.target.value)} defaultValue="title">
          <Radio.Button value="title">タイトル</Radio.Button>
          <Radio.Button value="text">本文から</Radio.Button>
          </Radio.Group>                  
          <Search placeholder="input search text" onSearch={onSearch} 
            enterButton />        
      </Space>      
      <hr />      
      {data}<br />
      <Link to="/">戻る</Link>
      </div>
  )
}
export default SearchPage;