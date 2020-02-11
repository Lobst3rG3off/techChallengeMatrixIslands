const islandArray = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1],
]
//part A

const arrayReader= function(array)  {
    let oneCount = 0
    for(let i = 0; i< array.length; i++)  //i = the large 4 arrays   {
        for (j = 0; j < array[i].length; j++) //j = the values inside the 4 arrays{
            if (islandArray[i][j] === 1) {
                oneCount++
                console.log('the amount of ones is ', oneCount)
                // console.log("islandArray is:", islandArray[i][j])
                // console.log("islandArray1 is:", islandArray[i + 1][j])
            }
            else
                console.log('Thats a zero')
        }
    

// arrayReader(islandArray);

//part B

const arrayChecker = function (array) {
    let islandCount = 0
    for (let i = 0; i < array.length; i++)     {
        for (j = 0; j < array[i].length; j++)  {
            if (islandArray[i][j] === 1 && islandArray[i][j + 1] === 0 && islandArray[i][j - 1] === 0 && islandArray[i + 1][j] === 0 && islandArray[i - 1][j] === 0) {

                islandCount++
                console.log('island count:', islandCount)
                // console.log("islandArray is:", islandArray[i][j])
                // console.log("islandArray1 is:", islandArray[i + 1][j])
            } else {
                console.log('Not an island')
            }
        }
    }
}


arrayChecker(islandArray);


//part c
const islandCounter = function (array) {
    let islandMassCount = 0
    for (let i = 0; i < array.length; i++) {
        for (j = 0; j < array[i].length; j++) {
            if (islandArray[i][j] === 1 && islandArray[i][j + 1] === 0 && islandArray[i][j - 1] === 0 && islandArray[i + 1][j] === 0 && islandArray[i - 1][j] === 0) {

                islandMassCount++
                console.log('island count:', islandCount)
                // console.log("islandArray is:", islandArray[i][j])
                // console.log("islandArray1 is:", islandArray[i + 1][j])
            } else {    
                console.log('Not an island')
            }
        }
    }
}
arrayChecker(islandArray);

//Pseudo code;

// i want the code to define an island as a mass of 1's that are surrounded by zeros. 
//a corner is is an element that sees two 0s.
//an edge sees 1 zero.
//I want the parse to be able to gather together the masses and denote the seperate masses. 

