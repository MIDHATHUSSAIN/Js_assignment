// Question 6.1

function six_point_one (number1 , number2){

    let number = number1 + number2

    return number

}
let number1 = parseInt(prompt("enetr first number"));
let number2 = parseInt(prompt("enetr second  number"));

 sum = six_point_one(number1,number2)
 alert(sum)

 sum = six_point_one(9,12)
 console.log(sum)


//  Question 6.2 

let words = ["brave" , "honest" , "liar" , "strong" , "have kind heart"]
function six_point_two (){
      let name = prompt("enter your name")

      let index = Math.ceil((Math.random())*(words.length - 1))
      console.log("jsdsjdks")

      alert(name + " " + " : " + words[index])
}

six_point_two()


// Question 6.3 

 let operation = prompt("enter operation which you want to perform +  , - , * , / ")
 let number3 = parseInt(prompt("enetr first number"));
 let number4 = parseInt(prompt("enetr second  number"));
 function calculator (sign , number3 , number4) {
      
    if (sign === "+"){
        let answer = number3 + number4
        return answer
    }
    else if (sign === "-"){
        let answer = number3 - number4
        return answer
    }
    else if (sign === "*" ){
        let answer = number3 * number4
        return answer
    }
    else if (sign === "/"){
        let answer = number3 + number4
        return answer
    }
    else{
        alert(" Please enter valid operation ")
    }

 }

alert(calculator(operation,number3,number4)) 