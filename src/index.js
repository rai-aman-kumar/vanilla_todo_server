const http = require("http");
const { PORT_NUMBER } = require("./constants");



const server = http.createServer((req, res) => {
    res.end("Hello");
});


server.listen(PORT_NUMBER, () => {
    console.log(`Server stared on port: ${PORT_NUMBER}`)
});