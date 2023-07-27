

export class persona {

    private nombre: string
    private edad: number
    private telefono: string
    private direccion: string
    private ciudad: string 

    constructor(nombre:string, edad:number,telefono:string, direccion:string,ciudad:string){
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
        this.direccion = direccion
        this.ciudad = ciudad
    }

    //Getters:

    public getNombre ():string{
        return this.nombre 
    }

    public getEdad ():number{
        return this.edad
    }

    public getTelefono (): string{
        return this.telefono
    }

    public getDireccion (): string{
        return this.direccion
    }

    public getCiudad (): string{
        return this.ciudad
    }

    //Setters:

    public setNombre (nombre:string){
        this.nombre = nombre
    }

    public setEdad (edad:number){
        this.edad = edad
    }
    
    public setTelefono (telefono:string){
        this.telefono = telefono
    }

    public setDireccion (direccion:string){
        this.direccion = direccion
    }

    public setCiudad (ciudad:string){
        this.ciudad = ciudad
    }

    //Metodos:

    public mayorEdad (){
        console.log(" ")
        console.log("===========================================")
        function clasificaEdad (numero1:number){
        if (numero1 > 17 )
        console.log ("La persona es mayor de edad.")
            
        else 
        console.log ("La persona es menor de edad.")
        }
        clasificaEdad(this.edad)
        console.log("============================================")
        return
    }
    public datosPersona (){
    console.log("  ");
    console.log("Los datos de" , this.nombre , "son: ")
    console.log("  ")
    console.log ("Edad = " , this.edad)
    console.log("Telefono = " , this.telefono)
    console.log("Direccion = " , this.direccion)
    console.log("Ciudad = " , this.ciudad)
    }
    
}