const fetch = require('node-fetch'); // 설치 필요: npm install node-fetch@2


const your_roomkey = '방키값';    

const webhookURL = `https://perpet.synology.me:3030/kakao/${your_roomkey}`;

const message = {
  content: '자바스크립트에서 보내는 테스트 메시지입니다! 🎉'
};

fetch(webhookURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(message)
})
.then(res => {
  if (res.status === 204) {
    console.log('✅ 메시지 전송 성공!');
  } else {
    console.log(`❌ 메시지 전송 실패. 상태 코드: ${res.status}`);
  }
})
.catch(error => {
  console.error('🚨 오류 발생:', error);
});
