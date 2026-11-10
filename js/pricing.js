function calcTotal(qty, isMember = false, isStudent = false) {
  const pricePerTicket = 362;
  const serviceFeePerTicket = 25;
  const baseTicketPrice = pricePerTicket - serviceFeePerTicket; // 337 ש"ח בסיס

  let discountRate = 0;
  if (isMember && isStudent) {
    discountRate = 0.20; // הנחה מקסימלית (20%) ללא כפל מבצעים
  } else if (isMember) {
    discountRate = 0.20;
  } else if (isStudent) {
    discountRate = 0.15;
  }

  const baseTotal = qty * baseTicketPrice;
  const discountedBase = baseTotal * (1 - discountRate);
  const totalServiceFee = qty * serviceFeePerTicket;

  return discountedBase + totalServiceFee;
}

function maxTickets(isMember = false) {
  return isMember ? 6 : 8;
}

module.exports = { calcTotal, maxTickets };