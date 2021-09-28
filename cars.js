//part 3

//Clarify the varaibles
class Vehicle
{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
//Using Information to Analyse which of the data
    Information(){
        console.log(`Make: ${this.make}`)
        console.log(`Model: ${this.model}`)
        console.log(`Year: ${this.year}`)
    }
}
//Using constructor to showcase which of the data
class Cars extends Vehicle
{
    constructor(make, model, year, doors){

        super(make, model, year);
        this.doors = doors;
    }
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

    let myCar = new Cars('VW', 'Polo', 2021, 5);
    myCar.Information();

//let myVehicle = new Vehicle('VW', 'Galf', '2021');
//myVehicle.Information();