// arguments obkect - on longer bound with arrow function

const add = (a,b) => {
//    console.log(arguments);
    return a + b;
}
console.log(add(55,1,1000));

// this keyword - no longer bound
// user object: two name and arrary cites
const user = {
    name: 'Andrew',
    cities: ['Auckland','New York','Dublin'],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);
        // const that = this;

        // this.name is not accessable here, unless you use arrow function

        // version 1
        // const cityMessages = this.cities.map((city)=> {
        //     return city;
        // });
        // return cityMessages;

        // version 2
        // return this.cities.map((city)=> {
        //     return city;
        // });

        // version 3
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        
        
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
    // array: [1,2,3],
    // multiply(array,multiplyByNumber) {
    //     for (let i=0;i<3;i++) {
    //         array[i] = array[i] * multiplyByNumber;
    //     }
    //     return array;
    // }
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

// [1,2,3] 2 [2,4,6]
// console.log(multiplier.multiply(multiplier.array,3));
console.log(multiplier.multiply());