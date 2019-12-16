function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이'
}

const getRabbit = async () =>{
  await sleep(500);
  return '토끼'
}

const getTurtle = async () =>{
  await sleep(3000);
  return '거북이'
}

async function process() {
  // 셋 중 하나라도 error나면 전체가 error가 난 것으로 간주됨
  const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  // 가장 빨리 끝난게 결과물이 된다. 가장 빨리 끝난게 error일 때만 error로 간주됨
  const [dog, rabbit, turtle] = await Promise.race([getDog(), getRabbit(), getTurtle()]);
}

process()