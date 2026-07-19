// ==========================================================================
// ตั้งค่า Firebase ของคุณเองที่นี่
// วิธีหาค่าเหล่านี้: Firebase Console > Project settings > General
//   > Your apps > SDK setup and configuration > Config
// ==========================================================================
export const firebaseConfig = {
  apiKey: "ใส่ค่าของคุณ",
  authDomain: "ใส่ค่าของคุณ.firebaseapp.com",
  projectId: "ใส่ค่าของคุณ",
  storageBucket: "ใส่ค่าของคุณ.appspot.com",
  messagingSenderId: "ใส่ค่าของคุณ",
  appId: "ใส่ค่าของคุณ"
};

// ชื่องาน / เป้าหมายเริ่มต้น (แก้ไขได้ภายหลังจากหน้า admin เช่นกัน)
export const DEFAULT_CONFIG = {
  eventName: "ยอดบริจาคสมทบทุน",
  goal: 100000
};
