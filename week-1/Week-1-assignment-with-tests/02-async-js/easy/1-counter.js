// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

var count=1;
const counter=()=>{
    console.clear();
    console.log(count);
    count+=1;
}

setInterval(counter,1000);

