
export class Producto{
    private identificador:string
    private nombre: string 
    private tipo: string
    private precio: number
    private pais: string
    private cantidad: number
    

    constructor (identificador:string, nombre:string, tipo:string,precio:number,pais:string,cantidad: number){
        this.identificador = identificador
        this.nombre = nombre
        this.tipo = tipo
        this.precio = precio
        this.pais = pais
        this.cantidad = cantidad
        
        }

    //Getters:
    
    public getIdentificador():string{
        return this.identificador
    }

    public getNombre():string{
        return this.nombre
    }

    public  getTipo():string {
        return this.tipo
    }

    public getPrecio():number{
        return this.precio
    }

    public getPais ():string{
        return this.pais
    }

    public getCantidad():number{
        return this.cantidad
    }

    //Setters:

    public setIdentificador(identificador:string){
        this.identificador = identificador
    }

    public setNombre (nombre:string){
        this.nombre = nombre
    }

    public setTipo (tipo:string){
        this.tipo = tipo
    }

    public setPrecio (precio:number){
        this.precio = precio
    }

    public setPais (pais: string){
        this.pais = pais
    }

    public setCantidad (cantidad:number){
        this.cantidad = cantidad
    }
    
}
