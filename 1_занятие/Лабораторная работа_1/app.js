const http = require('http'); 

const fs = require('fs'); 

http.createServer((request, response) => 
{
    let allData='';
    fs.readFile ('header.html', "utf8", (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            allData += data;
            fs.readFile ('body.html', "utf8", (err, data) => {
                if (err) {
                    console.log('Could not find or open file for reading\n');
                    response.statusCode = 404;
                    response.end();
                } else {
                    allData += data;
                    fs.readFile ('footer.html', "utf8", (err, data) => {
                        if (err) {
                            console.log('Could not find or open file for reading\n');
                            response.statusCode = 404;
                            response.end();
                        } else {
                            allData += data;
                            console.log(`The file ${data} is read and sent to the client\n`);
                            response.writeHead(200, {'Content-Type':'text/html'});
                            response.end(data);
                        }
                    });
                }
            });
        }  
    });
    console.log("Request accepted!");
}).listen(8080, ()=>{
    console.log("HTTP server works in 8080 port!\n");
});

