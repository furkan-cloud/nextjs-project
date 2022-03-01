import { hashPassword } from "../../../helpers/auth";
import { connectToDatabase } from "../../../helpers/db";

async function handler(req, res) {
  const data = req.body;

  const { email, password } = data;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid password. Password should include at least 7 chars",
    });
    return;
  }
  const client = await connectToDatabase();
  const db = client.db();

  const hashedPassword = hashPassword(password);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user successfully" });
}

export default handler;
