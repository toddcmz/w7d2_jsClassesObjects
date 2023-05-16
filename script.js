// Q1 use following array to print formatted string of contents

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

function inventoryList (thisList){
    for(let merch of thisList){
        console.log(
            `=======================================\nName:\t${merch.name}\nPrice:\t${merch.price}\nAbout:\t${merch.desc}\nCategory: ${merch.category}`
        )
    }
}

inventoryList(shopItems)

// Question 2 - print list of fav foods in particular format
const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const myDict = {'blub': "emoculate"}

console.log(myDict.constructor === Object)

// so....what's the way I should have used to do this...some sort of split operator?
// ooh, maybe a deconstructor? 
function parseFoods(theseFoods){
    for(let key in theseFoods){
        console.log(`${key} contains:`)
        if (typeof theseFoods[key]==='string'){
            console.log(theseFoods[key])
        }else if (theseFoods[key].constructor===Object){
            parseFoods(theseFoods[key])
        }else if(typeof theseFoods[key] === 'object'){
            //should be a list in here
            for (let ele of theseFoods[key]){
                if (ele.constructor===Object){
                    parseFoods(ele)
                }else{
                    console.log(ele)
                } // end inner if
            }// end inner for
        } // end outer if string
    }//end for key
}//end function

parseFoods(hwPerson)

/*
Question 3:
Create a Promised based function that will check a string to determine if it's length is greater than 10.
If the length is greater than 10 then resolve it and console log "Big word". 
If the length of the string is less than 10 then reject it and  console log "Small String"
*/

let wordSize = (aString) => {
    new Promise((resolve,reject) => { 
      if(aString.length >= 10){
        resolve(console.log("Big word"))
      }else{
        reject(console.lof("Small String"))
      }
    })
}

wordSize("lumberjack")

/*
Question 4:
Create a base class of GameMember and 2 children classes of Dealer, Player
both dealer and player have:
hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers
hit() : ability to add  a random number [1-13] to their hand
When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)
When a Player hits they can hit as long as their total is under 21
Use the randomNumber function provided below to gernerate a random number 1-12
*/

class GameMember {

    constructor(card1, card2, hand){
        this.card1 = Math.floor((Math.random()*13)+1)
        this.card2 = Math.floor((Math.random()*13)+1)
        this.hand = [this.card1, this.card2]
    }

    viewHand(){
        console.log(this.hand)
    }
}

class Dealer extends GameMember{

    constructor(card1, card2, hand){
        super(card1, card2, hand)
    }

    hit(){
        let sum = this.hand.reduce((acc, val) => {
            return acc + val},0)
        if (sum <= 16){
            this.hand.push(Math.floor((Math.random()*13)+1))
        }else{
            console.log('not allowed, total over 16')
        }
    }
}

class Player extends GameMember{

    constructor(card1, card2, hand){
        super(card1, card2, hand)
    }

    hit(){
        let sum = this.hand.reduce((acc, val) => {
            return acc + val},0)
        if (sum <= 21){
            this.hand.push(Math.floor((Math.random()*13)+1))
        }else{
            console.log('not allowed, total over 21')
        }
    }
}

console.log(Math.floor((Math.random()*13)+1))

const myPlayer = new Player()
const myDealer = new Dealer()

myPlayer.viewHand()
myPlayer.hit()
myPlayer.viewHand()

// Question 5
// 1: https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/javascript
// 2: https://www.codewars.com/kata/555086d53eac039a2a000083/solutions/javascript
// 3: https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/solutions/javascript