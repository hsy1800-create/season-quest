/* 계절 탐사대 23.5 — Firebase 실시간 연결 (학생 앱·교사 현황판 공용)
   데이터 구조
     rooms/{방코드}/teams/{모둠ID}   학생 기기가 올리는 진행 상황
     rooms/{방코드}/teams/{모둠ID}/pass/{미션ID}   선생님이 관문을 통과시키면 true
     rooms/{방코드}/notice          선생님 전체 알림 { text, at }
     rooms/{방코드}/resetAt         선생님이 방을 초기화한 시각
*/
window.LIVE = (function () {
  let db = null;
  try {
    if (window.FIREBASE_CONFIG && window.firebase) {
      firebase.initializeApp(window.FIREBASE_CONFIG);
      db = firebase.database();
    }
  } catch (e) {
    console.warn("Firebase 연결 실패:", e);
    db = null;
  }
  return {
    get on() { return !!db; },
    db,
    TS: db ? firebase.database.ServerValue.TIMESTAMP : Date.now(),
    // 방 코드는 영문 대문자·숫자 4~8자
    clean(code) { return String(code || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8); },
    valid(code) { return /^[A-Z0-9]{4,8}$/.test(code); },
    room(code) { return db.ref("rooms/" + code); },
    onConnected(cb) { if (db) db.ref(".info/connected").on("value", (s) => cb(!!s.val())); },
  };
})();
