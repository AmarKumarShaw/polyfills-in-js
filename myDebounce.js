// Bhai simple aur seedhi bhaasha mein:
// Debounce ka matlab hota hai — "ruk jao, thoda wait karo, fir function call karo."
// The last function will get executed


function myDebounce(fn,delay){
let timer =null;

return function(...args){

clearTimeout(timer)
timer = setTimeout(()=>{
    fn.apply(this,args)
},delay)
}
}