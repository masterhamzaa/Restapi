const { default: axios } = require("axios");
const express = require("express");
const app = express();
app.use(express.json());


app.get("/=", async (req, res) => {
  try {
    const data = await axios.get(
      `http://universities.hipolabs.com/search?country=`
    );
    res.json(data.data);
  } catch (err) {
    res.json({ err: err.message });
  }
});
app.get("/=:city", async (req, res) => {
  try {
    const data = await axios.get(
      `http://universities.hipolabs.com/search?country=${req.params.city}`
    );
    res.json(data.data);
  } catch (err) {
    res.json({ err: err.message });
  }
});

app.listen(3000, () => {
  console.log("server running with success..");
});
