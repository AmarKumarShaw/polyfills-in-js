function once(fn){
    let called = false;
    let result;

    return function(...args){
        if(!called){
            result = fn.apply(this,args)
            called=true;
        }
        return result;
    }
}

function sayHello(){
    console.log("Hello !")
}

const sayHelloOnce = once(sayHello);

sayHelloOnce()
sayHelloOnce()
sayHelloOnce()