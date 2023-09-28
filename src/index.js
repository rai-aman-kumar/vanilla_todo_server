const http = require("http");
const { PORT_NUMBER } = require("./constants");
const { handleRequest } = require("./controllers");


const server = http.createServer(handleRequest);
server.listen(PORT_NUMBER, () => {
    console.log(`Server stared on port: ${PORT_NUMBER}`)
});