// set the time delay the information callback process

const objArr = [
    {
        name: 'Dang',
        age: 25,
        memberStatus: true
    },
    {
        name: 'Ton',
        age: 30,
        memberStatus: true
    },
    {
        name: 'Tan',
        age: 20,
        memberStatus: false
    },
    {
        name: 'Jeny',
        age: 43,
        memberStatus: true
    },
    {
        name: 'Locus',
        age: 36,
        memberStatus: true
    },
    {
        name: 'Tanin',
        age: 40,
        memberStatus: false
    },
];

const mathRanFiv = () => Math.round(Math.random() * 2);






const ranPersonPromise = () => {
    return new Promise((resolve, reject) => {

        const passNumRan = mathRanFiv();
        if (passNumRan >= 1) {
            setTimeout(() => {
                resolve(console.log(`Work has been done by ${passNumRan} seconds`))
            }, passNumRan * 1000);
        }
        else {
            reject(console.log(`Fail, spend to much time one this task (${passNumRan} seconds)`))
        }
    })
}
const count = 0;
ranPersonPromise()
    .then(() => {
        console.log('You passed')
        return ranPersonPromise()
    })
    .then(() => {
        console.log('You passed again!')
        return ranPersonPromise()
    })
    .then(() => {
        return console.log('You passed again and again!')
    })
    .catch(() => console.log(`It's finally fail!`))