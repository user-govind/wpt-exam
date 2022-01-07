const express = require("express")
const app = express();
app.use(express.json())

const cors = require("cors")
app.use(cors())

const { addMess, selectMess } = require("./user")


app.get("/getmess", async (req, res) => {

    // res.json("get qurey success");
    res.json(await selectMess());

})

app.post("/postmess", async (req, res) => {

    // res.json("post qurey success")
    const data = req.body;

    console.log(data)

    await addMess(data);
})


app.listen(4050, () => {
    console.log("server Started")
})