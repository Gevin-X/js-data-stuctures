
function commanNumber(arr) {
rrr = {}; 
    for(i = 0 ;i< arr.length; i++ ){
        if(rrr[arr[i]]){
            return arr[i];
            break
        }else{
            rrr[arr[i]]=i;
        }
    }
}

array=[2,1,1,2,3,5,1,2,4]
commanNumber(array)

// function commanNumber(array1){
//     array2=[];
//     for(i=0; i < array1.length; i++){
//         array1[i] = true;
//         array2.push(array1[i])

//     }
//     return array2
// }

// commanNumber(array

//function commanArray(arr){} 