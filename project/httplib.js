const http=require('http');
const fs= require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content':'text/html'});
    if(req.url === '/register' ||req.url==='/'){
        let data=fs.readFileSync('project/one.html');
        res.write(data);
    }
    else if(req.url === '/thank'){
        let data=fs.readFileSync('project/thank.html');
        res.write(data);
    }
    else{
        let data=fs.readFileSync('project/contents.html');
        res.write(data);

    }
    res.end();
}).listen(8080,()=>{console.log('Server Started at Port 8080')})





