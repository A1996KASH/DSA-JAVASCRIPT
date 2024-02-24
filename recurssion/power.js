function power(m, n){
    if(n === 0) return 1
    return m * power(m, n - 1)
    
}

console.log(power(2, 4))// 16
            // 2 * power(2, 3) = 8
            //     2 * power(2, 2) = 4
            //         2 * power(2, 1)  = 2
            //             2* power(2, 0) = 1