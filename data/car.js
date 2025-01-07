class Car{
    brand;
    model;
    speed=0;
    constructor(carDetails){
        this.brand=carDetails.brand;
        this.model=carDetails.model;
        this.speed=0;
       /* console.log(`car name:${this.brand} and car model:${this.model}`);*/
        this.displayInfo();
        this.go();
    } //carDetails: acting like objects this way clean code .
    displayInfo(){
        console.log(`car name:${this.brand} and car model:${this.model} ,speed of car:${this.speed}`);
    };
    go(){
       this.speed+=5;
       this.displayInfo();
    }
    break(){
        this.speed-=5;
        this.displayInfo();
    }
   
}
const carpro=new Car({brand:'Toyota',model:'Corolla'}); // instance of class 
const carpro1=new Car({brand:'Tesla',model:'Model 3'});
console.log(carpro1);
carpro.go(); //call method through intance.