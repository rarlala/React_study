import React from 'react';

function Hello({color, name, isSpecial}) {
return <div style={{
  color
  }}>
    {/* 삼항연산자를사용하는방법*/}
    {/* {isSpecial ? <b>*</b> : null} */}
    
    {isSpecial && <b>*</b>}
    {/* AND 연산자를 사용하는 방법 */}
    안녕하세요 {name}
  </div>;
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;