class Car{
    brand;
    model;

    constructor(carDetails){
        this.brand=carDetails.brand;
        this.model=carDetails.model;
        console.log(`car name:${this.brand} and car model:${this.model}`);
        this.displayInfo();
    } //carDetails: acting like objects this way clean code .
    displayInfo(){
        console.log(`car name:${this.brand} and car model:${this.model}`);
    };
   
}
const carpro=new Car({brand:'Toyota',model:'Corolla'}); // instance of class 
const carpro1=new Car({brand:'Tesla',model:'Model 3'});
console.log(carpro1);