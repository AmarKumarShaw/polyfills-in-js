// Call Bind and Apply in JavaScript 
let car1 ={
    color:"red",
    company:"Ferrari"
}

function purchaseCar(currency,price){
    console.log(
        `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
    )
}
// Simple Polyfill For Call
Function.prototype.myCall = function(context={},args){
    if(typeof this !== "function"){
        throw new Error(this+"This is not Callable")
    }
    context.fn = this;
    context.fn(...args)
}
purchaseCar.myCall(car1,"$","5000")

// Advance Polyfill For Call including some edge cases 
Function.prototype.myAdvanceCall =  function(context,...args){

    context = context ||  globalThis;

    const fnSymbol = Symbol();
    context[fnSymbol] = this;


    const results =  context[fnSymbol](...args);
    delete context[fnSymbol];

    return results;
}