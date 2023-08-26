require('dotenv').config()

// setup express app
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080 

// MongoDB connection
const connectDB = require('./config')
connectDB()

// import routes
const jobRoutes = require('./routes/jobRoutes')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

const { authorize } = require('./middleware/authMiddleware')

app.use(express.json())
app.use(cors())

app.use('/api/jobs', authorize, jobRoutes)
app.use('/api/user', authorize, userRoutes)
app.use('/auth', authRoutes)


app.listen(PORT)