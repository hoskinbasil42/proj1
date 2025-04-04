class SchoolProject1 {
    constructor() {
        this.data = [
            { name: 'Alice', age: 20 },
            { name: 'Bob', age: 30 },
            { name: 'Charlie', age: 40 },
            { name: 'David', age: 50 }
        ];
    }

    getRandomStudent() {
        return this.data[Math.floor(Math.random() * this.data.length)];
    }
}

const schoolProject1 = new SchoolProject1();
console.log(schoolProject1.getRandomStudent());
