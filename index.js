import * as fs from "node:fs";
fs.writeFile("jishee.txt","fdsafsadfdsa","utf-8",()=>{
    
});
fs.readFile("jishee.txt","utf-8",(error,data)=>{
    console.log(data);
})