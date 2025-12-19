const express = require("express")
const connectDb = require("./dbConfig")
const cors = require("cors")
const ipoModel = require("./models/ipoModel")

const app = express()
app.use(cors())
app.use(express.json()) // To parse JSON

const PORT = process.env.PORT || 3000

// Connect DB and start server
app.listen(PORT, async () => {
  console.log(`Server running at ${PORT}`)
  await connectDb()
})


// ------------------ ROUTES ------------------

// 1️⃣ Get all IPOs
app.get("/ipos", async (req, res) => {
  try {
    const ipos = await ipoModel.find()
    res.status(200).json(ipos)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch IPOs", details: error })
  }
})


// 2️⃣ Get IPO by ID
app.get("/ipos/:id", async (req, res) => {
  try {
    const ipo = await ipoModel.findById(req.params.id)

    if (!ipo) {
      return res.status(404).json({ message: "IPO not found" })
    }

    res.status(200).json(ipo)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch IPO details", details: error })
  }
})


// Test route
app.get("/", (req, res) => {
  res.send("Hello")
})

