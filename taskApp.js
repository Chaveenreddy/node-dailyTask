

const fs = require("fs");

const reqResHandler = (req, res) => {
    const method = req.method;
    const url = req.url;
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>responce</title></head>')
        res.write('<body><h1 id="value">hi bro</h1><form action="/message" method="POST"><input type="text" name ="message"/><button type ="submit">send</button></form> </body>')
        res.write('</html>')
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunck) => {
            console.log(chunck); body.push(chunck);
            
        })
        //event driven architecture 
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];


            fs.writeFile('message.txt', message, (e) => {
                res.statusCode = 302;
                res.setHeader('location', "/");

                return res.end();
            });
        })
    }
}

//one method  of export
module.exports = reqResHandler;