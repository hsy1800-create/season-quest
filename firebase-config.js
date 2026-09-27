/*
  Firebase 설정 파일
  ------------------------------------------------------------
  Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹 </>) 에 나오는
  firebaseConfig 내용을 아래 null 자리에 그대로 붙여 넣으세요.
  (README.md의 "Firebase 연결하기" 참고)

  예시)
  window.FIREBASE_CONFIG = {
    apiKey: "AIza....",
    authDomain: "season-quest-xxxx.firebaseapp.com",
    databaseURL: "https://season-quest-xxxx-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "season-quest-xxxx",
    storageBucket: "season-quest-xxxx.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef"
  };

  ※ databaseURL 줄이 꼭 있어야 해요. (Realtime Database를 만든 뒤 설정을 복사하면 들어 있어요)
  ※ null로 두면 실시간 현황판 없이 각 기기에서만 동작해요.
*/
window.FIREBASE_CONFIG = null;
