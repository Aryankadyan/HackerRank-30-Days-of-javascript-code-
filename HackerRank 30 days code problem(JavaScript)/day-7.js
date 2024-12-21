function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const arrLength = arr.length
    
    if (n < 1 || n > 1000){
        return
    }
    
    if(arrLength < 1 || arrLength > 1000){
        return
    }
    
    const reversedArr = arr.reverse()
    const reversedArrToString = reversedArr.join(' ')
    
    console.log(reversedArrToString)
}