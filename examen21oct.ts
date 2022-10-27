class Animal {
  private name: string;
  constructor(name: string){
    this.name = name;
  }
  public startJump(): void {
    console.log('empieza a saltar.')
  }
}
class Dog extends Animal {
 constructor(name: string) {
   super(name)
 }
 public makeSound(): void {
   console.log ('wuff wuff');
 }
}
class Cat extends Animal {
 constructor(name: string) {
   super(name);
 }
  public makeSound(): void {
   console.log('meow meow');
 }
}
let aerosmith: Cat = new Cat('Narancia');
aerosmith.makeSound(); // -> meow meow
let purpleHaze: Dog = new Dog('Fugo');
purpleHaze.makeSound(); // -> wuff wuff
purpleHaze.startJump(); // -> empieza a saltar.

/*
Que es un objeto? Un objeto es una unidad que tiene un estado y un comportamiento.

Que es una clase? Una clase es aquella que forma el modelo a partir del que se estructuran los datos y los comportamientos.

A que se llama metodo constructor? Es un metodo especial para crear e inicializar un objeto creado a partir de una clase.

Que son los modificadores de acceso? Son elementos que determinan si una variable puede ser modificada o no.

Que diferencia hay entre uno privado y uno protegido? 
Privado: Solamente el codigo de la misma class puede acceder.
Protegido: Solamente el codigo de la misma class o bien de una class derivada de esa class puede acceder.

Cuando se usa el this? Se usa como modificador del primer parámetro de un método de extensión.

Cuando se usa el super? Se usa cuando se quiere usar un constructor en una class heredada.

A que se llama sub-clase, o clase hija? Es la class que usa un metodo de la class principal.
*/

class Televisor{
  private marca: string;
  private modelo: string;
  private volumen: number;
  constructor(marca: string, modelo: string, volumen: number){
    this.marca = marca;
    this.modelo = modelo;
    this.volumen = volumen;
  }
  public encendido(): void{
    console.log('TV encendido.');
  }
  public apagado(): void{
    console.log('TV apagado.');
  }
  public subirVolumen(): number{
    return this.volumen += this.volumen + 1
  }
  public bajarVolumen(): number{
    return this.volumen += this.volumen - 1
  }
}

class SmartTV extends Televisor{
  private internet: boolean
  constructor(marca: string, modelo: string, volumen: number, internet: boolean){
    super(marca,modelo,volumen);
  }
  public openYoutube(): void{
    if (this.internet = true){
      console.log('Abriendo YouTube.');
  }
  }
  public openNetflix(): void{
    if (this.internet = true){
      console.log('Abriendo Netflix.');
  }
  }
  public conectarWifi(): void{
    if (this.internet = false){
      this.internet = true; 
    }
  }
}

let theboys : SmartTV = new SmartTV('LG','WebOS',6,false);
theboys.encendido();
theboys.subirVolumen();
theboys.bajarVolumen();
theboys.conectarWifi();
theboys.openYoutube();
theboys.openNetflix();

