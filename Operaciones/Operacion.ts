export class Operacion {
    private numero1:number
    private numero2:number

    constructor(numero1:number, numero2:number) {
    this.numero1 = numero1 
    this.numero2 = numero2 
    }

    //Getters:
    public getNumero1 ():number{
        return this.numero1
    }

    public getNumero2():number{
        return this.numero2
    }

    //Setters: 

    public setNumero1 (numero1:number){
        this.numero1 = numero1
    }

    public setNumero2 (numero2: number){
        this.numero2 = numero2
    }

    //Metodos: 
    public sumar (){
        console.log("=====================================")
        console.log("Los valores a usar son: ", this.numero1 , "y", this.numero2)
        console.log("  ")
        function sumarNumeros (n1:number, n2:number){
            console.log("La suma de los numeres es: ", n1 + n2)
        }
        sumarNumeros(this.numero1, this.numero2)
        return
    }

    public restar(){
        function restarNumeros (n1:number, n2:number){
            console.log("La resta de los numero es: ", n1 - n2);
        }
        restarNumeros(this.numero1,this.numero2)
        return
    }

    public multiplicar (){
        function multiplicarNumeros (n1:number, n2:number){
            console.log("La multiplicacion de los valores es: ", n1*n2)
        }
        multiplicarNumeros (this.numero1, this.numero2)
        return
    }

    public dividir (){
        function division (n1: number, n2: number){
            if (n2 < 1)
               console.log("No es posible dividir entre numeros menores a 1")

            else
               console.log("La division es: ", n1/n2)
        }
        division(this.numero1,this.numero2)
        console.log("=======================================")
        return
    }
}