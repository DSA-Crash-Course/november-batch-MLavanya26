const subArray=(num)=>{
    let x= -100;
    let runningSum=0;
    let n=num.length;
    for(let i=0;i<n;i++){
         runningSum=Math.max(runningSum+num[i],num[i]);
        x=Math.max(x,runningSum);
    }
    return x;
}
//console.log(subArray([-2,3,-1,4,-1,2,1,-5,4]));


let TwoSum=(array,target)=>{
    let l=0;
    let r=array.length-1;
    while(l<r){
        if(array[l]+array[r]==target){
            return 1;
        }
        else if(array[l]+array[r]<target){
            l++;
        }
        else{
            r--;
        }
        return 0;
    }
}
let array=[10,20,30,40,50];
let target=90;
console.log(TwoSum(array,target));


