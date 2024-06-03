// STEP 1
// class Cat {
//     constructor(a, b) {
//         this._a = a
//         this._b = b
//     }
// }

// const Dog = class {
//     constructor(c, d) {
//         this._c = c
//         this._d = d
//     }
// }

// STEP 2
// const myCat = new Cat()
// const myDog = new Dog()

// STEP 3
// class Animal {
//     constructor(a, b) {
//         this._a = a
//         this._b = b
//     }
//     initiateAnimal = function() {
//         console.log('The Animal has been created')
//     }
// }
// const ani = new Animal()
// ani.initiateAnimal()

// STEP 4
// class Animal {
//     constructor(animalType) {
//         this._animalType = animalType
//     }
//     initiateAnimal = function() {
//         console.log(`The ${this._animalType} has been created`)
//     }
// }
// const ani = new Animal('fox')
// ani.initiateAnimal()

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this._type = type
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._length = length
//     }
//     describeAnimal = function() {
//         console.log(`The ${this._breed} ${this._type} has a ${this._color} colored pelt, measuring on average ${this._height} at the shoulder and ${this._length} in length.`)
//     }
// }
// const ani = new Animal('fox', 'himalayan', 'snowy-grey', '18 inches', '34 inches')
// ani.describeAnimal()

// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this._type = type
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._length = length
//     }
// }

// const ani = new Animal('fox', 'himalayan', 'snowy-grey', '18 inches', '34 inches')
// for (let prop in ani) {
//     console.log(prop, ':', ani[prop])
// }

// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this._type = type.toLowerCase()
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._length = length
//     }
//     describeAnimal = function() {
//         console.log(`The ${this._breed} ${this._type} has a ${this._color} colored pelt, measuring on average ${this._height} at the shoulder and ${this._length} in length.`)
//     }
//     speak = function() {
//         if (this._type === 'dog') {
//             return `The ${this._color} dog is barking!`
//         } else if (this._type === 'cat') {
//             return `The ${this._color} cat is meowing!`
//         } else {
//             return `I have no idea what a "${this._type}" is, I only know about cats and dogs.`
//         }
//     }
// }
// const ani = new Animal('caT', 'himalayan', 'snowy-grey', '18 inches', '34 inches')
// console.log(ani.speak())

// STEP 8
// class Animal {
//     constructor(type, breed, color, height, length) {
//         let _type = type.toLowerCase()
//         let _breed = breed
//         let _color = color
//         let _height = height
//         let _length = length

//         let checkType = function() {
//             if (_type === 'dog') {
//                 return 'dog'
//             } else if (_type === 'cat') {
//                 return 'cat'
//             } else {
//                 return `ERROR`
//             }
//         }
//         this.speak = function() {
//             return `The ${checkType()} has made a noise!`
//         }
//     }
// }
// const ani = new Animal('caT', 'himalayan', 'snowy-grey', '18 inches', '34 inches')
// console.log(ani.speak())

// STEP 9
// String.prototype.findWords = function(wordToFind) {
//     let words = this.split(/\s+/)
//     let count = 0
//     for (let i = 0; i < words.length; i++) {
//         if (wordToFind.toLowerCase() === words[i].toLowerCase()) {
//             count++
//         }
//     }
//     alert(`"${wordToFind}" was found ${count} time(s).`)
//     return count
// }

// let testPara = 'In the heart of winter, beneath a canopy of twinkling stars, a clever fox named Rina roamed the snowy forest. Her fur, a fiery contrast against the pure white landscape, bristled with determination. She paused, sniffing the frigid air, before selecting a spot near an ancient oak. With nimble paws, she began to dig, flinging snow aside in graceful arcs. The cold bit at her, but she continued tirelessly. Finally, she reached the soft earth below, uncovering a hidden stash of acorns. Satisfied, she curled into the cozy hole, her treasure safe, and drifted into a peaceful sleep.'

// console.log(testPara.findWords('she'))