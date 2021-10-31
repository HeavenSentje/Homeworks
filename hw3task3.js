class Zoo {
    constructor(address, area, ticket_price, workers = [], animals = []) {
        this.address = address;
        this.area = area;
        this.ticket_price = ticket_price;
        this.workers = workers;
        this.average = function () {
            return this.workers.reduce((a, c) => a + c, 0) / this.workers.length;
        }
        this.worker_add = function (newObject) {
            this.workers.push(newObject);
        }
        this.worker_remove = function (index) {
            this.workers.splice(index, 1);
        }
        this.workers_show = function () {
            console.log(this.workers);
        }
        this.animals = animals;
        this.average1 = function () {
            return this.animals.reduce((a, c) => a + c, 0) / this.animals.length;
        }
        this.animal_add = function (newObject) {
            this.animals.push(newObject);
        }
        this.animal_remove = function (index) {
            this.animals.splice(index, 1);
        }
        this.animals_show = function () {
            console.log(this.animals);
        }
        this.show_animal_by_id = function (id) {
            console.log(this.animals[id]);
        }
    }
    get address() {
        return this._address;
    }
    get area() {
        return this._area;
    }
    get established_date() {
        return this._established_date;
    }
    get ticket_price() {
        return this._ticket_price;
    }
    set address(value) {
        this._address = value;
    }
    set area(value1) {
        return this._area = value1;
    }
    set ticket_price(value3) {
        return this._ticket_price = value3;
    }
}

class Animal {
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    get type() {
        return this.type;
    }
    get color() {
        return this._color;
    }
    get weight() {
        return this._weight;
    }
    get height() {
        return this._height;
    }
    get place_of_origin() {
        return this._place_of_origin;
    }
    set weight(value) {
        return this._weight = value;
    }
    set height(value1) {
        return this._height = value1;
    }
}

class Snakes extends Animal {
    isPoisonous() {
        console.log('Snakes are not poisonous');
    }
}

class catLike extends Animal {
    isSafeToPet() {
        console.log('It is safe to pet');
    }
}

class Birds extends Animal {
    isFlying(str) {
        if (str === "yes") console.log('The bird is flying');
        else console.log('The bird is not flying');
    }
}

class Worker extends Zoo {
    firstName(str) {
        console.log('First Name: ' + str);
    }
    secondName(str1) {
        console.log('Second Name: ' + str1);
    }
    phone(str2) {
        console.log('Phone: ' + str2);
    }

}

let zoo = new Zoo('Krasnaya', '14', '5$', ['Jake', 'John', 'Ben'], ['Monkeys','Lions']);
zoo.worker_add('Brad');
zoo.worker_remove(0);
zoo.animal_add('Tigers');
zoo.animal_remove(1);
zoo.animals_show();
zoo.show_animal_by_id(0);
zoo.workers_show();

let snake = new Snakes();
let cat = new catLike();
let bird = new Birds();
snake.isPoisonous();
cat.isSafeToPet();
bird.isFlying('yes');

let worker = new Worker();
worker.firstName('Robert');
worker.secondName('Ford');
worker.phone('123456');

