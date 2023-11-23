// Assume the program is working in the smothie shop. So we will let you have some kinds of object array as a stock of material to do the business, So you have to recieve the order - make a cup of mix fruits smoothie - serve the customer by every process need to spend time for each untill it've done.


// Stocks of materials
const stocks = {
    fruits: ['banana', 'strawbery', 'kiwi', 'pineapple', 'orange'],
    syrupAdded: [true, false],
    sizes: ['12 oz', '16 oz', '20 oz'],
}
let isTheShopOpen = true;
// Promise FN below


let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (isTheShopOpen) {
            setTimeout(() => {
                resolve(work());
            }, time)
        }
        else {
            reject(console.log('The shop is closed'))
        }
    })
}

const syrupDetect = (syrupAdded) => {
    if (syrupAdded) {
        console.log('Syrup added')
    }
    else {
        console.log('No syrup added')
    }
}

order(0, () => console.log('Welcome to smoothie shop'))
    .then(() => {
        return order(2000, () => console.log(`${stocks.fruits[0]} has been selected`))
    })
    .then(() => order(2000, () => syrupDetect(stocks.syrupAdded[1])))
    .then(() => {
        return order(2000, () => console.log(`${stocks.fruits[0]} has been mixed`))
    })
    .then(() => order(3000, () => console.log(`The smoothie size is ${stocks.sizes[1]}`)))
    .then(() => order(1000, () => console.log('The smoothie is ready ro served')))
    .catch(() => console.log('Customer left'))





// // callBack FN
// const order = (fruits, syrupAdded, sizes) => {
//     if (isTheShopOpen) {
//         console.log('Welcome to the smoothie shop :)')
//         setTimeout(() => {
//             addFruit(fruits)
//             setTimeout(() => {
//                 console.log(`${fruits} is ready to mix`)
//                 setTimeout(() => {
//                     addSyrup(syrupAdded)
//                     setTimeout(() => {
//                         cupSelected(sizes)
//                         setTimeout(() => {
//                             console.log('The smoothie is ready to serve :)')
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 2000)

//         }, 3000)
//     }
//     else {
//         console.log('Sorry, We are closed now!')
//     }
// }

// const addFruit = (fruits) => {
//     console.log(`${fruits} has been selected`)
// }

// const addSyrup = (syrupAdded) => {
//     if (syrupAdded) {
//         console.log('Syrup Added')
//     }
//     else {
//         console.log('No syrup Added')
//     }
// }

// const cupSelected = (sizes) => {
//     console.log(`Smoothie is in the ${sizes} cup`)
// }
// order(stocks.fruits[1], stocks.syrupAdded[1], stocks.sizes[0])
