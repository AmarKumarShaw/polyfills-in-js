Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i=0; i < this.length; i++){
        temp.push(cb(this[i],i,this))
    }
    return temp;
}

const nums = [1,2,3,5]

const mulitply = nums.myMap((num) => num * 4 )
console.log(mulitply,"Multiply")