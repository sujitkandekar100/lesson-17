class Car{
    brand;
    model;
    speed;
    isTrunckOpen;
    constructor(carDetails){
        this.brand=carDetails.brand;
        this.model=carDetails.model;
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
        console.log(`car name:${this.brand} and car model:${this.model} ,speed of car:${this.speed},car istrunckopen:${this.isTrunckOpen}`);
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
const carpro=new Car({brand:'Toyota',model:'Corolla'}); // instance of class 
const carpro1=new Car({brand:'Tesla',model:'Model 3' ,isTrunckOpen:true});
console.log(carpro1);
carpro.go(); //call method through intance.