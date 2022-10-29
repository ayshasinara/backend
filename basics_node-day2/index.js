const http = require("http")
const fs = require("fs")
const { encode } = require("punycode")
const server = http.createServer((req, res) => {

    if (req.method == "GET") {
        const log = req.method + " " + req.url + "\n"
        fs.appendFile("./log.txt", log, (err, data) => {
            if (err) {
                console.log("something went wrong")
            }
        })

    }

    if (req.method == "GET" && req.url === "/") {
        res.end("welcome to home page")
    }
    else if (req.method == "GET" && req.url === "/contact") {
        res.end("welcome to contact page")
    }
    else if (req.method == "GET" && req.url === "/about") {
        res.end("welcome to about page")
    }
    else if (req.method == "GET" && req.url === "/details") {
        const data = fs.readFileSync("./index.txt", { encoding: "utf-8" })
        return res.end(data)
    }
    // console.log(req.url)
    // console.log(req.method)
    // res.end("hello")
})
server.listen(8080)