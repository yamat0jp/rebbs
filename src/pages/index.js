import React from 'react'
import SearchPage from 'search'
import { Link } from 'gatsby'
import App from '../components/antd'

function IndexPage() {
  return (
    <>
      <h1>無料電子掲示板へようこそ</h1>
      <Link to="/search">検索ページ</Link>
    </>
  )
}
export default IndexPage;

export const Head = () => <title>ようこそ</title>