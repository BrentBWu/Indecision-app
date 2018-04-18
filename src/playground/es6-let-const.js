var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// const define something you can't modify or rewrite or resign
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping
const fullName = 'Jen Mead';
let firstName;

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}