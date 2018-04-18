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