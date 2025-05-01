// ✅ Why This is Correct:
// lastCall → store karta hai last time jab function run hua tha

// now - lastCall >= limit → check karta hai ki minimum interval beet gaya ya nahi

// Agar beet gaya, to:

// lastCall ko update karo

// fn.apply(this, args) → correct way to call the function with this and arguments



function myThrottling(fn,limit){
    let lastCall=0;

    return function(...args){
        let now = Date.now()
        if(now - lastCall >= limit){
            lastCall = now;
            fn.apply(this,args)
        }
    }


}