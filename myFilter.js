// Filter exactly do what map but it only return the elements which have met 
// the condition

Array.prototype.myFilter = function(cb){
    let temp=[];
    for(let i=0; i < this.length ; i++ ){
        if(cb(this[i],i,this)) {
            temp.push(this[i])
        }
    }
    return temp
}

const nums = [1,2,3,4,5]

const filteredData = nums.myFilter((nums) => nums > 2)
console.log(filteredData)