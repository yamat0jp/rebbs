import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';

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
const App = () => (
  <div>
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
    <Search
      addonBefore="https://"
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 304,
      }}
    />
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
    </div>
);
function LoginButton() {    
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();    
  if (isAuthenticated) {
    return (     
      <button onClick={() => {
        logout({
          logoutParams: {
            returnTo: "https://localhost:8000/bbs"
          }
        });
      } }>Log out</button>      
    )
  } else {
    return (
    <button onClick={loginWithRedirect}>Log in</button>      
  )
  }
}
export default App;
export {LoginButton};