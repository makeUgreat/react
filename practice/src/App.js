import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '전체 글 목록'
  let [a,b] = useState('스프링2란 무엇인가?');
  // a -> useState 안의 값 : '스프링이란 무엇인가?'
  // b -> state 변경을 도와주는 함수
  // Destructuring 문법임 
  // 변수는 새로고침을 눌러야만 반영이 되지만
  // useState에 넣은건 값이 바뀌면 자동으로 재렌더링 시킴

  return (
    // return 안에는 하나의 div 태그만 있어야함 병렬 금지
    // 자식 태그는 가능
    <div className="App"> 
      <div className="black-nav">
        <h4 style = {{color : 'yellow'}}>리액트 첫 블로그임</h4>
      </div>
      <div className='list'>
      <h3>{post}</h3>
        <h4>{a}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
