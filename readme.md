#java script
  basic
  -syntax
  -variable 
  function
  oop
  

git
 push
 pull
 merge 
 pr
 conflict resolution
 versioning
 tracking



node js
BE
 -Express
   -architecture
    -mvc

routing
middlewares
parsers
controllers
validators
services(like email, or third party service like open ai)

database 
 mongodb

intergration with express
project work(BE/API) 


FE
 html
 css 
 react
  jsx
  tailwind css


//document
//alert
//prompt


//variable and constants
//temporary data (run data changes with program)
//static data (fixed once declared not changable)

//variables
var
let
const

// scope
//globle, block


var a = 10
console.log(a); //output 10
{
  //block
  var a = 20;
  console.log
}

// data types
string "", '', 
number
  -integer, float, big int

boolean
- true, false

null
array[]
json
function
oop{}



array collection of data

sepratadetd by comma
stored in index value pair
 inclose with[]


single dimensional array = if an array does not include any other as a value

multi dimensional array = atleaet one array data within an array


//git
-service
-local machine
  -repository
-online repository
  -github
  -gitlab
  -bitbucket


1. you have project in your machine need to put in on online repo
2. you don't have project in your machine, but repo is there online
3. you have project in both repo but not linked  

-https
-ssh
   -bind laptop git






git init
git remote add origin git@github.com:sah-pratiksha/mernstack.git
git config --global user.email "sahpratiksha374@gmail.com"
git config --global user.name "sah-pratiksha"
git add .
git commit -m "First Push"
git status
git push origin master


 pull from git =  git clone url
 url change = git remote set-url origin (use url)
 ssh-keygen
 cat /Users/wind/.ssh/id_234gfs.pub
 

 ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIK2A6I7/UEYXQRQDTb1o482lSJpDLqO36Ez10G87r9wL pratiksha@DESKTOP-STAQ6RA


DTO = data transfer object
422 for generic message



const Joi = require("joi");
const registerDataDTD = Joi.object(
  {
    name: joi.String()
  }
)


const bodyValidator = () 
  

const.Joi = require("joi");
const registerDataDTO = Joi.object ({
    name: Joi.steing().main(2).max(50).required.message({
        "string.empty": "Name should not be empty"
    }),
    email: Joi.string().email().required().message({
        "string.empty": "email should not be empty"
    }),
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d))
}

)