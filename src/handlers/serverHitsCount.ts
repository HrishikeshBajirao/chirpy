import { type Request, type Response } from "express";
import { config } from "../config.js";

export function serverHitsCount(req: Request, res: Response) {
  res.type("text/html; charset=utf-8");
  res
    .status(200)
    .send(`<html>
  <body>
    <h1>Welcome, Chirpy Admin</h1>
    <p>Chirpy has been visited ${config.fileserverHits} times!</p>
  </body>
</html>`);
}