function cats(arr) {
    for (let cat of arr) {
        cat = cat.split(' ');
        let nameCat = cat[0];
        let ageCat = cat[1];

        class Cat {
            constructor(name, age) {
                this.name = name,
                    this.age = age
            }
            sayMeow() {
                console.log(`${this.name}, age ${this.age} says Meow`)
            }
        }
        let catMeow = new Cat(nameCat, ageCat);
        catMeow.sayMeow();
    }
}