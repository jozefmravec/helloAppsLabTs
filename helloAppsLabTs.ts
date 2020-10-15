console.log(RockPaperScissors("rock", "paper"))

function RockPaperScissors(player1:string, player2:string)
{
    if (player1 == player2) return "tie"

    if (player1 == "rock"){
        if (player2 = "paper") return "player 2 won"
        else return "player 1 won"
    }

    else if(player1 == "paper")
    {
        if(player2 == "rock") return "player1 won"
        else return "player2 won"
    }
    else if(player1 == "scissors")
    {
        if(player2 == "rock") return "player2 won"
        else return "player1 won"
    }
    return;
}


console.log(totalDistance(0.2, 0.4, 100))

function totalDistance(stepHeight:number, stepLenght:number, towerLength:number)
{
    return (towerLength / stepHeight) * (stepHeight + stepLenght);   
}



console.log(equal(7,7,7));
function equal(firstNumber:number, secondNumber:number, thirdNumber:number,)
{
    let equal:number;
    if(firstNumber == secondNumber && secondNumber == thirdNumber)
    {
        equal = 3;
    }
    else if (firstNumber != secondNumber && secondNumber != thirdNumber)
    {
        equal = 0;
    }
    else if(firstNumber == secondNumber)
    {
        equal = 2;
    }
    else if(secondNumber == thirdNumber)
    {
        equal = 2;
    }
    return equal;
    
}


console.log(isTriangle(2,3,4));
function isTriangle(a:number, b:number, c:number){
    if((a + b) > c && (b+c) > a && (a + c) > b)
    {
        return true;
    }
    return false
}





console.log(equalSlices(8,3,3))

function equalSlices(totalSlices:number, noRecipes:number, sliceEach:number)
{
    return (noRecipes * sliceEach) <= totalSlices
    
}


