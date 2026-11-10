function calcTotal(qty, isMember, isStudent) {
  const ticketPrice = 362;
  const serviceFeePerTicket = 25;
  
  const subtotal = qty * ticketPrice;
  
  let discountRate = 0;
  if (isMember) {
    discountRate = 0.20; // 20% הנחה למועדון
  } else if (isStudent) {
    discountRate = 0.15; // 15% הנחה לסטודנטית
  }

  const discountedTickets = subtotal * (1 - discountRate);
  const serviceFee = qty * serviceFeePerTicket;
  
  return discountedTickets + serviceFee;
}

module.exports = { calcTotal };