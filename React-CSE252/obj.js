const car = {
    name: 'hyundai',
    model: 'vema',
    asg() {
        console.log("My car model is:", this.name);
    }
};

// Calling the function
car.asg();
