
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a - b);
    let minDiff = Infinity;
    let temp =[];
    for (let i = 1;i < arr.length; i++){
       minDiff =Math.min(minDiff,arr[i] - arr[i - 1] );
    }
    for (let i =1;i < arr.length ; i++){
        if(arr[i] - arr[i - 1] === minDiff){
            temp.push([arr[i - 1], arr[i]]);
        }
    }
    return temp;
}