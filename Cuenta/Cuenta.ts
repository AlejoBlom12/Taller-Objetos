
export class Cuenta {
    private titular: string
    private valorActual: number

    constructor(titular: string, valorActual:number){

        this.titular = titular
        this.valorActual = valorActual
    }

    //Getters:
    public getTitular ():string{
        return this.titular
    }

    public getValorActual (): number{
        return this.valorActual
    }

    //Setters:
    public setTitular (titular:string){
        this.titular = titular
    }

    public setValorActual (valorActual:number){
        this.valorActual = valorActual
    }

    //Metodos:

    public mostrar (){
        console.log("  ");
        console.log("==============================================");
        console.log("        ", "Informacion de la cuenta")
        console.log("==============================================");
        console.log ("Titular de la cuenta: ", this.titular )
        console.log ("Valor actual en la cuenta: ", this.valorActual + "$")
        console.log("==============================================");
        
    }

    public ingresarCantidad (numero1:number){
        console.log("   ");
        console.log("=======================================================================")  
        console.log("                ", "Ingresos Agregados")
        console.log("=======================================================================")  
 
        if (numero1 < 0)
            console.log("Valor no valido.")
        else 
            console.log("La cantidad  actual en la cuenta: ", this.valorActual + "$")
            console.log("La cantidad agregada es: ", numero1 + "$")
            console.log("La cantidad agregada a sido un exito, el valor actual de su cuenta es de: ", (this.valorActual + numero1) + "$")
            this.valorActual = this.valorActual + numero1
        console.log("=======================================================================")  
        return
        
    }

    public retirarCantidad (numero1:number){
        console.log(" ")
        console.log("=====================================================")
        console.log("              ", "   Retiro")
        console.log("=====================================================")
        if (this.valorActual > numero1){
            console.log ("El valor actual es: ", this.valorActual + "$")
            console.log ("El valor a retirar es: ", numero1 + "$")
            console.log("   ")
            console.log("=====================================================")
            console.log("                 ","Procesado...","      ");
            console.log("=====================================================")
            console.log("   ")
                console.log("El valor actual de tu cuenta es de: ", (this.valorActual - numero1) + "$")
                this.valorActual = this.valorActual - numero1}
            else
                console.log("El valor a retirar: ", numero1 + "$ , excede el limite del valor actual." , "(",this.valorActual + "$",")")
            return
    }
}