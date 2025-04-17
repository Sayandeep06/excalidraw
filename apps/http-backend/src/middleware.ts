import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config"

export default function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization ?? "";

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string | number };
    //@ts-ignore
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(403).json({ message: "User unauthorized" });
  }
}