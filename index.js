const inquirer= require('inquirer');
const fs= require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt(
    [
        {
            type: 'input',
            message:"What's the project title?",
            name:'title',
            validate:(value)=>{if(value){return true}else{return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:"how to install the app?",
            name:'installation',
            validate:(value)=>{if(value){return true}else{return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:"instructions to follow?",
            name:'instructions',
            validate:(value)=>{if(value){return true}else{return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:"how to use app?",
            name:'usage',
            validate:(value)=>{if(value){return true}else{return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:"contributors?",
            name:'contributors',
            validate:(value)=>{if(value){return true}else{return 'i need a value to continue'}},
        },
        {
            type: 'list',
            message:"what license was used?", 
            name:'license',
            choices: ["ISC","Apache_2.0", "CC0", "BSD_3", "none"],
            validate:(value)=>{if(value){return true}else{return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message:"Github Username",
            name:'git',
            validate:(value)=>{if(value){return true}else{return 'i need a value to continue'}},
        },
    ]
).then((response)=>{
console.log(response)

fs.writeFileSync(path.join(process.cwd(), "README.md"), generateMarkdown({...response}))
    
})
