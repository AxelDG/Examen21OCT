var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.startJump = function () {
        console.log('empieza a saltar.');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('wuff wuff');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('meow meow');
    };
    return Cat;
}(Animal));
var aerosmith = new Cat('Narancia');
aerosmith.makeSound(); // -> meow meow
var purpleHaze = new Dog('Fugo');
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
var Televisor = /** @class */ (function () {
    function Televisor(marca, modelo, volumen) {
        this.marca = marca;
        this.modelo = modelo;
        this.volumen = volumen;
    }
    Televisor.prototype.encendido = function () {
        console.log('TV encendido.');
    };
    Televisor.prototype.apagado = function () {
        console.log('TV apagado.');
    };
    Televisor.prototype.subirVolumen = function () {
        return this.volumen += this.volumen + 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        return this.volumen += this.volumen - 1;
    };
    return Televisor;
}());
var SmartTV = /** @class */ (function (_super) {
    __extends(SmartTV, _super);
    function SmartTV(marca, modelo, volumen, internet) {
        return _super.call(this, marca, modelo, volumen) || this;
    }
    SmartTV.prototype.openYoutube = function () {
        if (this.internet = true) {
            console.log('Abriendo YouTube.');
        }
    };
    SmartTV.prototype.openNetflix = function () {
        if (this.internet = true) {
            console.log('Abriendo Netflix.');
        }
    };
    SmartTV.prototype.conectarWifi = function () {
        if (this.internet = false) {
            this.internet = true;
        }
    };
    return SmartTV;
}(Televisor));
var theboys = new SmartTV('LG', 'WebOS', 6, false);
theboys.encendido();
theboys.subirVolumen();
theboys.bajarVolumen();
theboys.conectarWifi();
theboys.openYoutube();
theboys.openNetflix();
