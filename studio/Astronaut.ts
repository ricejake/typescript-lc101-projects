export class Astronaut implements Payload {
    massKg: number;
    let name: string;

    constructor(massKg: number, name: string){
        this.name = name;
        this.massKg = massKg;
    }
}