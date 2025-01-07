class Car{
    #brand;
    #model;
    speed;
    isTrunckOpen=false;
    constructor(carDetails){
        this.#brand=carDetails.brand;
        this.#model=carDetails.model;
        this.isTrunckOpen=carDetails.isTrunckOpen;
        this.speed=0;
        
       /* console.log(`car name:${this.brand} and car model:${this.model}`);*/
        this.displayInfo();
       if(this.isTrunckOpen)
       {
        this.break();
       }
       else{
        this.go();
       }
        
    } //carDetails: acting like objects this way clean code .
    displayInfo(){
        const trunkStatus=this.isTrunckOpen ? 'open' : 'closed';
        console.log(`car name:${this.#brand} and car model:${this.#model} ,speed of car:${this.speed},car istrunckopen:${trunkStatus}`);
    };
    go(){
       this.speed+=5;
       this.displayInfo();
    }
    break(){
        if(this.speed>0)
        {
            this.speed-=5;
            this.displayInfo();
        }  
        else{
            console.log(`please check car speed . `);
        }    
    }
    
}
class Racecar extends Car{
    acceleration;
    constructor(carDetails){
      super(carDetails); //always parent constructor firstly call after use this keyword.
      this.acceleration=carDetails.acceleration;
      
    }
    go(){
        this.speed+=this.acceleration;
        this.displayInfo();
    }
}
const carpro=new Car({brand:'Toyota',model:'Corolla'}); // instance of class 
const carpro1=new Car({brand:'Tesla',model:'Model 3' ,isTrunckOpen:true});
console.log(carpro1);
carpro.go(); //call method through intance.
const racecar=new Racecar({brand:'toyota',model:'Fortuner' ,isTrunckOpen:true,acceleration:20});
