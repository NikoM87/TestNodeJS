var http = require("http");

function onRequest(request, response) {
    console.log("Request received.");
    console.log("Request: " + request);
    console.log("Response: " + response);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");