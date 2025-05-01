const car1 ={ 
    name:"Amar",
    age:25
}

const purchaseCar= function(){
    console.log(`I am ${this.name} and I am ${this.age} years old `)
}

Function.prototype.myBind = function(context={},args){
    if(typeof this !== "function"){
        throw new Error(this + "cannot be bound as it")
    }
    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs);
    }
}


const newFunc = purchaseCar.myBind(car1,"Rs.")

console.log(newFunc(500000))