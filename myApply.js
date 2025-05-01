// Apply is similar to Apply the difference is in the form of array 

const car1 = {
    name:"Amar",
    age:24
}

const purchaseCar = function(currency,price){
    console.log(`I am ${this.name} and m Age: ${this.age} ${currency}`)
}

Function.prototype.myApply=function(context={},args=[]){
    if(typeof this !== "function"){
        throw new Error(this+"This is Error")
    }
 
    if(!Array.isArray(args)){
        throw new TypeError("Create Form List")
    }

    context.fn = this;
    context.fn(...args)
}

purchaseCar.myApply(car1,["Rupees: 50000"])
