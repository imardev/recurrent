import { Router } from "express";
import type { Request, Response } from "express";
const router: Router = Router();
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.js";

// Endpoint para logear usuario
router.post("/", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Los campos email y contraseña son obligatorios." });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).json({ error: "El usuario no existe" });
    }

    const comparedPasswords = await bcrypt.compare(
      password,
      user.passwordHash,
    );

    if (comparedPasswords) {
      res.status(200).json({
        message: "Inicio de sesión correcto",
      });
    } else {
      return res.status(401).json({ error: "La contraseña no coincide" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al acceder el usuario" });
  }
});

export default router;
