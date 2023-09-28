// root controller, handles all incoming requests, and forwards it to the correct controller
const handleRequest = (req, res) => {
    
    switch(req.url) {
        case "/api/user":
            res.end("User endpoint was called");
            break;
        case "/api/todo":
            res.end("Todo endpoint was called");
            break;
        default:
            res.end("404")
            break;
    }

}

module.exports = {
    handleRequest
}