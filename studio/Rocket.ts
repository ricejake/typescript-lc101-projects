export class Rocket {
    let name: string;
    let totalCapacityKg: number;
    let cargoItems = [];
    let astronauts = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number{
        for(items of Payload[]){
            let sum: number;
            sum += items;
        }
    }

    canAdd(item: Payload): boolean{
        if(this.currentMassKg() + cargoItems.massKg <= this.totalCapacityKg){
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean{
        
    }
}