// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const REGULAR_MAX_TICKETS = 8;    // מקסימום כרטיסים ללקוחה רגילה
const MEMBER_MAX_TICKETS = 4;     // מקסימום כרטיסים לחברת מועדון

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : REGULAR_MAX_TICKETS;
}

function calcTotal(qty, isMember) {
  const limit = maxTickets(isMember);
  if (qty < 1 || qty > limit) {
    return null;
  }
  
  const pricePerTicket = isMember ? TICKET_PRICE * 0.8 : TICKET_PRICE;
  return qty * (pricePerTicket + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS: REGULAR_MAX_TICKETS, maxTickets, calcTotal };
}