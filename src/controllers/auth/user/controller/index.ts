import type { Request, Response } from "express";
import { registerUser } from "../../../../middleware/helper/(auth)";
import { findUserByFirebaseUid } from "../../../../functions/db/user";
import { comparePassword } from "../../../../functions/helpers/auth/password";
import { generateToken } from "../../../../functions/core/jwt/(jwt_id)";

export class UserAuthController {
  protected request: Request;
  protected response: Response;
  constructor(req: Request, res: Response) {
    this.request = req;
    this.response = res;
  }
  private async handleRegister() {
    try {
      const result = await registerUser(this.request.body);
      return this.response.status(201).json({
        message: "User registered successfully.",
        ...result,
      });
    } catch (error: any) {
      console.error("[User Register Error]", error.message);
      const status = error.message === "User already exists." ? 409 : 400;
      return this.response.status(status).json({ error: error.message });
    }
  }
  private async handleLogin() {
    try {
      const { email, password } = this.request.body;
  
      if (!email || !password) {
        return this.response.status(400).json({ error: "Email and password are required." });
      }
  
      const user = await findUserByFirebaseUid(email);
      if (!user) {
        return this.response.status(404).json({ error: "User not found." });
      }
  
      const isMatch = await comparePassword(password, user.hashedPassword);
      if (!isMatch) {
        return this.response.status(401).json({ error: "Invalid credentials." });
      }
  
      const token = generateToken(email);
  
      return this.response.status(200).json({
        message: "Login successful",
        token,
        user: {
          uid: email,
          hashedId: user.hashedId,
        },
      });
    } catch (error: any) {
      console.error("[User Login Error]", error.message);
      return this.response.status(500).json({ error: "Server error" });
    }
  }
  
  use = async (): Promise<any | void> => await this.initialize();

  initialize = async () => {
    const { action } = this.request.body;

    switch (action) {
      case "register":
        return await this.handleRegister();
      case "login":
        return await this.handleLogin();
      default:
        return this.response.status(400).json({ error: "Invalid action." });
    }
  };
}
