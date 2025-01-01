class Calculator {
    constructor(){
        this.power = function (n, p){
            if(n < 0 || p < 0){
                return ('n and p should be non-negative')
            }else{
                return n ** p
            }
        }
    }
}
