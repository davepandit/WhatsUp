import express from "express";
import { chats } from "./data/data.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to WhatsUp");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/login", (req, res) => {
  res.send("This will later be used for login");
});

app.get("/api/chat/:id", (req, res) => {
  const { id } = req.params;
  // search the specific chat
  const reqChat = chats.find((chat) => chat._id == id);
  res.send(reqChat);
});

app.listen(5000, () => {
  console.log("Server is running at port: 5000");
});
