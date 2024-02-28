import React from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Flex, Radio } from 'antd';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const onChange = (e) => {
  console.log(`radio checked:${e.target.value}`);
};  
function SearchPage() {
    return (
        <Space direction="vertical">        
            <Radio.Group onChange={onChange} defaultValue="a">
            <Radio.Button value="a">タイトル</Radio.Button>
            <Radio.Button value="b">本文から</Radio.Button>
            </Radio.Group>
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </Space>
    )
}
export default SearchPage;