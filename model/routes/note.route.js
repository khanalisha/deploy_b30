const express = require("express");
const { NoteModel } = require("../note.model");
const { auth } = require("./middlewear/auth");
const NoteRouter = express.Router();
NoteRouter.use(auth);

NoteRouter.post("/create", async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    await note.save();
    res.status(200).send({ msg: "New note is created" });
  } catch (error) {
    res.status(400).send({ error: "error" });
  }
});

NoteRouter.get("/", async (req, res) => {
  try {
    const note = await NoteModel.find({ username: req.body.username });

    res.status(200).send(note);
  } catch (error) {
    res.status(400).send({ error: "error" });
  }
});

NoteRouter.patch("/update/:noteID", async (req, res) => {
  const { noteID } = req.params;
  const note = await NoteModel.findOne({ _id: noteID });
  try {
    if (req.body.userID === note.userID) {
      await NoteModel.findByIdAndUpdate({ _id: noteID }, req.body);
      res.status(200).send({ msg: `data is now updated of ${noteID}` });
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

NoteRouter.delete("/delete/:noteID", async (req, res) => {
  const { noteID } = req.params;
  const note = await NoteModel.findOne({ _id: noteID });
  try {
    if (req.body.userID === note.userID) {
      await NoteModel.findByIdAndDelete({ _id: noteID });
      res.status(200).send({ msg: `data is now Deleted of ${noteID}` });
    } else {
      res.status(200).send({ error: "You are not authorised" });
    }
  } catch (error) {
    res.status(400).send({ error: "error" });
  }
});

module.exports = {
  NoteRouter,
};
