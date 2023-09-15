export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { name, email, subject, message } = body;

  console.log("name", name);
  console.log("subject", subject);
  console.log("email", email);
  console.log("message", message);
});
