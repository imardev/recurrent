import Router from "express";
const router = Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/", async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = {
      username: username,
      name: name,
      email: email,
      password: passwordHash,
    };
    // añadir creacion de usuario con prisma
    res.status(201).json({ message: "Usuario creado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
});
