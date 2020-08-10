const express = require("express")
const server = express()

const { pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require("./pages")

// Configure nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Server setup and configuration
server
// Accept data from req.body
.use(express.urlencoded({ extended: true }))

// Sets folder for static files (css, scripts, images)
.use(express.static("public"))

// Application paths
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

// Sets port
.listen(5500)