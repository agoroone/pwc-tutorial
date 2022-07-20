for (let i = 0; i < 10; i++) {

console.log(i)

}

for (let i=2; i<10; i++){

    console.log(i)
}



for (let i=12; i<=19; i++){
   
    console.log("Number is " +i )
}

let i = 0
while (i<20){
    console.log(i)
    i++
}




//assignment

let s = 90

if(s ===90) {
    console.log('Excellent')

}else if (s===80){
    console.log('very goood')

}else if (s===50){
    console.log('Average')

}else if (s===30){
    console.log('fail')

}else if (s===0){
    console.log('\you didnt write the test')

}



//assignment 2


let p = 60

if(p > 70) {
    console.log('Distinction')

}else if (p >59 ){
    console.log('very goood')

}else if (p > 49){
    console.log('credit')

}else if (p > 39){
    console.log('Pass')

}else if (p < 40) {
    console.log('Fail')

}

//function
function addNUm(a,b) {

    return a + b
}

addNUm(2,3)
console.log(addNUm(2,3))


//subtraction
function subNUm(a,b) {

    return a - b
}

addNUm(2,3)
console.log(subNUm(2,3))


//multiplication
function mulNUm(a,b) {

    return a * b
}

addNUm(2,3)
console.log(mulNUm(2,3))

// printng from 2 to 20 step 2
for (let i=2; i<=20; i+=2){
   
    console.log("Number is " +i )

}


for (let i=2; i<=20; i+=3){
   
    console.log("Number is " +i )

}


let someWords = 'adamu'
//console.log(someWords.split())

let somearray = ['a','b','c','d']
console.log(somearray.reverse())


function stringToArray(s){
return s.split('')

}

console.log(stringToArray('hakeem'))


function isPalindrome (str){

  let newString = str.split('').reverse().join('')


   if (newString == str){
   return true
    
   }else {
    return false
   }


}

isPalindrome('levels')
console.log(isPalindrome('levels'))


//int palindrome
let string15 = '15'
console.log(parseInt(string15))



function intPalindrome (num){

 let numToString =  num.toString()
    let revString = numToString.split('').reverse().join('')
  
  
     if (numToString == revString){
     return true
      
     }else {
      return false
     }
  
  
  }
  
  intPalindrome(1011)
  console.log(intPalindrome(1011))




