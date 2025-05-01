// This is Unique and other than Map and Filter 
// Here we have to focus on the way Accumulator majorily


Array.prototype.MyReduce = function(cb,initialValue){
    var accumulator = initialValue;
    for(let i = 0 ; i < this.length ; i++){
        accumulator = accumulator ? cb(accumulator,this[i],i,this) : this[i]
    }
    return accumulator;
}

const nums = [1,2,3,4]

const sum = nums.reduce((acc,curr)=> acc + curr,4)

console.log(sum)