function processData(input) {
    var arr = input.split('\n');
    for (var i = 1; i < arr.length; i++){
        var n = arr[i];
        if(isPrime(n)){
            console.log("Prime")
        } else{
            console.log("Not Prime")
        }
    }
} 
 function isPrime(n){
    if(n <= 1){
        return false;
    }
    if(n <= 3){
        return true;
    }
    
    if (n%2 == 0 || n%3 == 0){
        return false;
    }
    
    for(var index = 5; index * index <=n; index = index + 6){
        if(n%index == 0 || n%(index + 2) == 0){
            return false;
        }
    } 
    return true;
    }
 
