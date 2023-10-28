const express = require("express");
const app = express();
const { connection } = require("./db");
const { userRouter } = require("./model/routes/user.routes");
const { NoteRouter } = require("./model/routes/note.route");
const cors = require("cors")
app.use(cors())
app.use(express.json());

app.use("/note", NoteRouter);
app.use("/users", userRouter);

// app.get("/", async (req, res) => {
//   try {
//     res.status(200).send({ msg: "getting users" });
//   } catch (error) {
//     res.status(400).send({ error: err });
//   }
// });
app.listen(8080, async () => {
  try {
    await connection;
    console.log("db is created");
    console.log("server is running port 8080");
  } catch (error) {
    console.log({ err: error.message });
  }
});
