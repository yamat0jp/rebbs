import React from 'react'
import { Link } from 'gatsby'

function IndexPage() {
  return (
    <>
      <h1>無料電子掲示板へようこそ</h1>
      <Link to="/bbs">BBS</Link>
      <br />
      <Link to="/search">検索ページ</Link>
      <hr />
      <Link to="/info">お知らせ</Link>
      <br />
      <Link to="/master">管理人</Link>
      <hr />
      <Link to="/help">使い方案内</Link>
    </>
  )
}
export default IndexPage;

export const Head = () => <title>ようこそ</title>