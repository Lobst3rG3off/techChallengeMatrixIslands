const islandArray = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1],
]
//part A





const arrayReader= function(array)  {
    let oneCount = 0
    for(let i = 0; i< array.length; i++)    {
        for (j = 0; j < array[i].length; j++) {
            if (islandArray[i][j] === 1) {
                oneCount++
                console.log(oneCount)
            }
            else
                console.log('Thats a zero')


        }
    }
    // const arrayReader = function (array) {
    //     for (let i = 0; i < array.length; i++) {
    //         console.log(array[i]);
    //     }


    // }

}


// for (i = 0; i < numbers.length; i++) {
//     for (j = 0; j < numbers[i].length; j++) {
//         if (numbers[i][j] % 2 === 0) {
//             numbers[i][j] = "even";
//         }
//         else
//             numbers[i][j] = "odd";


//     }

// }

arrayReader(islandArray);