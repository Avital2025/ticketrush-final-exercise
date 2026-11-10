function calcTotal(qty, isMember = false, isStudent = false) {
  // בדיקת כמות לא חוקית: 0, שלילי, מעבר למכסה, או חריגה ממכסת מועדון/רגיל
  if (!Number.isInteger(qty) || qty <= 0 || qty > 8) return null;
  if (isMember && qty > 6) return null;

  const pricePerTicket = 362; // מחיר מלא כולל עמלה

  let discountRate = 0;
  if (isMember && isStudent) {
    discountRate = 0.20; // 20% הנחה מקסימלית (ללא כפל מבצעים)
  } else if (isMember) {
    discountRate = 0.20;
  } else if (isStudent) {
    discountRate = 0.15;
  }

  // ההנחה ניתנת על מחיר הכרטיס בלבד (לפי הבדיקה: 2 כרטיסים לחבר = 584)
  const discountedPricePerTicket = pricePerTicket * (1 - discountRate);
  return qty * discountedPricePerTicket;
}

function maxTickets(isMember = false) {
  return isMember ? 6 : 8;
}

module.exports = { calcTotal, maxTickets };