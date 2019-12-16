import React from 'react';
import Hello from './Hello.js';
import './App.css';

const name = 'react'
const style = {
  backgroundColor : 'black',
  color: 'aqua',
  fontSize: 24,
  padding: '1rem'
}

function App() {
  return (
    <>
      {/* 주석 작성하는 방법 */}
      <div style={style}>{name}</div>
      <Hello 
      // 열리는 태그 내에서 주석을 작성하는 방법
      />
      <div className="gray-box"></div>
    </>
  );
}

export default App;
