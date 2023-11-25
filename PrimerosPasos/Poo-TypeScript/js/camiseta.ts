// Interface for the base properties and methods of a shirt
interface ShirtBase {
    setColor(color: string): void;
    getColor(): string;
}

// Decorador

function estampar(logo:string){
    return function(target:Function){
        target.prototype.estampacion = function():void{
            console.log(`Camiseta estampada con el logo de: ${logo}`)
        }
    }
}

@estampar('Nike')
class Shirt implements ShirtBase {
    private color: string;
    private model: string;
    private brand: string;
    private size: string;
    private price: number;

    constructor(color: string, model: string, brand: string, size: string, price: number) {
        this.color = color;
        this.model = model;
        this.brand = brand;
        this.size = size;
        this.price = price;
    }

    setColor(newColor: string): void {
        this.color = newColor;
    }

    getColor(): string {
        return this.color;
    }
}

// Clase hija

class Sudadera extends Shirt{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha(){
        return this.capucha;
    }
}

var sudaderNike = new Sudadera("Rojo", "nike", "nike", "L", 1000);
sudaderNike.setCapucha(true);
console.log(sudaderNike);