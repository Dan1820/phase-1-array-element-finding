// const names=['queen vee','huddah','femi one' ,'shakila','Adasa','janet']
// console.log(names.indexOf('shakila', 6))

const nums=[2,4,5,6,8,9,12,13,14]
// function isOdd(element){
//     return(element %2===1);
// }
// const found=nums.find(Element=>Element>10)
function found(element){
    return(element> 13)
}
console.log(nums.find(found))