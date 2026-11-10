function joinWaitlist(list, email) {
  if (!email || typeof email !== "string") return list;
  const trimmedEmail = email.trim().toLowerCase();
  if (!trimmedEmail.includes("@")) return list;
  if (list.includes(trimmedEmail)) return [...list];
  return [...list, trimmedEmail];
}
module.exports = { joinWaitlist };
