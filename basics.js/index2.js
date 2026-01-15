let s1="hello world";
let s2='hello world';
let s3="node.js is fun";

console.log(s1);
console.log(s2);
console.log(s3);

//String Methods
let text = "JavaScript";
console.log("Length:", text.length);

//Access Characters (Index)
let word = "Node";
console.log("First Character:", word[0]);        // N
console.log("Third Character:", word.charAt(2)); // d

//toUpperCase() and toLowerCase()    
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());  
let city = "new york";

//trim
let msg="hello world   ";
console.log(msg.trim());

//includes
let sentence="I Love JS";
console.log("Includes 'Love': ",sentence.includes("Love"));

//startswith
let email ="admin@gmail.com";
console.log("Starts with 'admin': ",email.startsWith("admin"));

//endswith
console.log("Ends with '.com': ",email.endsWith(".com"));

//slice
let lang="Javascript";
console.log("substring(4,10): ",lang.substring(4,10));

//replace
let greet="hello world";
console.log("Replace ",greet.replace("world","Node"));

//replace all
let hiText="hi hi hi hi";
console.log("Replace All: ",hiText.replaceAll("hi","hello"));

//split
let names="Tushar,Ankit,Shivam,Bhavesh";
let nameArray=names.split(",");
console.log("Name List: ",nameArray);

//concat
let a ="Hello ";
let b ="World";
console.log("Concatenated String: ",a.concat(b));

//Template Literals
let username="Tushar";
let age=21;
console.log(`My Name: ${username}, Age: ${age}`);

// string comparison
let str ="hello";
str.toUpperCase();
console.log("immutaable string:",str);

//email Validation
let userEmail="user@gmail.com";

if(userEmail.includes("@") && userEmail.endsWith(".com")){
    console.log("Valid Email");
}else{
    console.log("Invalid Email");
}

//Real backend example - password TRim
let userPassword="admin123";
userPassword=userPassword.trim();
console.log("Password Trimmed: ",userPassword);

//count words in a string
let sentence2="Node JS  backend Learning";
let words=sentence2.split(" ");
console.log("word count: ",words.length);
 


// Joins array elements with a single space character as the separator
const sentence3=['this','is','awesome'];
const sentenceFromArray = sentence3.join(' ');
console.log(sentenceFromArray); 


