# kakao_push_client

카카오톡 푸쉬 사용방법

1.푸쉬 봇 추가

    친구추가=>카카오톡 ID=> "pushbot" => 추가

2. 1:1 대화 또는 그룹방에 초대

3. 채팅방에 "방키" 입력 하여 방키값 확인

테스트 방법 1 (웹주소로 콜하기)

크롬 주소창에 해당 주소 입력 (주소에 확인한 방키값으로 수정)  
용도 : 간단 테스트 용도

http://perpet.synology.me:3000/kakao?key=방키값&msg=안녕!

테스트 방법 2 (자바스크립트)

test1.js 코드 참고

용도 : 자체서버구축해서 AI 연동해서 주기적으로 알람 보내기


테스트 방법 3 (구글시트 앱 시트)

https://docs.google.com/spreadsheets/d/1y2MQ0b-0asXF0YgLRvzWg89zyx50CpeEnO-rnWfZEEU/edit?usp=sharing

용도 : 주기적으로 구글시트 변동된 내용을 전송하기 