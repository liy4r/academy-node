// import jwt from "jsonwebtoken";

// const SECRET_KEY: any = process.env.JWT_SECRET;

// export const verifyJWT = (req: any, res: any, next: any) => {
//   const authHeader = req.headers["authorization"];
//   if (!authHeader) return res.status(401).json({ message: "Token missing" });

//   const token = authHeader.split(" ")[1]; // Bearer <token>
//   jwt.verify(token, SECRET_KEY, (err: any, decoded: any) => {
//     if (err) return res.status(403).json({ message: "Invalid token" });
//     req.user = decoded;
//     next();
//   });
// };
