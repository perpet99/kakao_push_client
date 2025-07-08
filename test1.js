

async function getExchangeRate() {
  const fetch = (await import('node-fetch')).default;
  const res = await fetch('https://api.frankfurter.app/latest?from=USD&to=KRW');
  const data = await res.json();
  const result = `${data.amount} ${data.base} = ${data.rates.KRW} KRW`
  console.log(result);
  //console.log(`result : ${JSON.stringify(data)} `);

  fetch('https://api.frankfurter.app/latest?from=USD&to=KRW');

  const your_roomkey = '방키값';    
  fetch(`https://perpet.synology.me:3030/kakao?key=${your_roomkey}&msg=${result}`);

}

getExchangeRate();

// const cron = require('node-cron');
// cron.schedule('0 8 * * *', () => {
//   getDailyWeather(); // 매일 오전 8시에 실행
// });
