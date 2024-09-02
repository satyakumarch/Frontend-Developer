const error1=new Error("Error message");
console.log("cause" in error1);

const error2=new error("Error message"," ");
console.log("cause" in error2);
