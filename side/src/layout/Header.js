/* Header.js */
import React from 'react';
import {Link} from "react-router-dom";

const Header123 = () => {
  return (
    <header>
      {/*<a href="/">홈</a>*/}       {/*a 태그: 페이지 새로고침(페이지 이동)*/}
      <Link to="/">홈</Link>         {/*Link 태그: route 부분만 새로고침(페이지 이동) -> 비동기처럼*/}
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/board">게시판</Link>
      <hr/>
    </header>
  );
};

export default Header;