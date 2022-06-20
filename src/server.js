import express from "express";
const PORT = 4000;

const app = express();

const goddipMiddleware(reg, res, next) =>{
    console.log("I'm in the middle")

}

const handleHome = (req, res) => {
  return res.send("I still love you.");
};
const handleLogin = (req, res) => {
  return res.send("Login here.");
};
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
