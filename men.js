// data types
let namE = "hakeem" //string
let age = "30" //number
let c = null // null
let y = undefined // undefined
let isMarried = false 
console.log(age)



console.log(namE)
console.log(typeof y)
console.log(typeof isMarried)
let favColor = ['white','red','green','pink','yellow','black']
let x = "hello world" //string
console.log(x.toUpperCase())
console.log(x.length)

//concatenation
let m = "i am "
let n = "i go to pwc bootcamp"
let p = "i love to learn javascript"
console.log(m +"hakeem " +n + " and " +p)


//string literal
console.log(`${m} ${age} and ${p}`)

// logging out
//alert ('hello world')
console.log('hello world')
console.error('thid is an error')
console.warn('this is a warning')

//array
let fruit = ['banana','apple','orange']
fruit.push('grape')
fruit.push('strawberry')
fruit.pop()
fruit.shift()
fruit.unshift('kiwi')
fruit[4] = "mango"
console.log(fruit)

//object literals
const person = {

    firstName: 'hakeem',
    age: 60,
    hobbies: ['music','movies','sports'],
    address: {
        street: '50 lagos street',
        city: 'island',
        State: 'Lagos',

    }
}
console.log(person)
console.log(person.firstName)


