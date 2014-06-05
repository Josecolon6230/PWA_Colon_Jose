/**
 * Created by Dusk on 6/3/14.
 */
 console.log("hello");


var data = [3,5,7,4,9,2,7,6,1,0];


console.log(lowestNum(data));


function lowestNum(arr){
    var lowNum = arr[0];
    for (var i=0;i<arr.length;i++){
        if(arr[i]<lowNum){
            lowNum=arr[i];
        }

    }
    return lowNum;
}


var data2= [3,4,5];


console.log(findNum(data2,4));

function findNum(arr,n){



}