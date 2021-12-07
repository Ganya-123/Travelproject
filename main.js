const fs=require('fs');
fs.readFile('meow.txt',(err,data)=>{
    if (err===null){
        console.log(data.toString());
    }
    else{
        console.log(err.message);

    }
})
d='';
let d=fs.readFileSync(meow.txt);
fs.writeFile('meow.txt',d.toString+'meow meow hai',(err)=>{
    if (err===null){
        
    }else{
        console.log(err.message)
    }
}
)