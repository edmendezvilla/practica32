"use strict"


class User {
    constructor (username ,password,email) {

        this.username = username;
        this.password= password;
        this.username=username;
    }
    login (username,password) {
        //valiar usuario y cotraseña
        if (username === this.username && password === this.password){
            alert("welcome");
        }else{
            alert("Oooooops¡¡¡¡¡");
        }

    }
    resetPassword (newPassword){
        this.password= newPassword;


    }
    updateinfo(newemail){
        this.email=newemail
    }
    Showinfo(){
        alert (`usuario:${this.username} contraseña: ${this.password} email:${this.email}`)
    }
}
//instanciar crear un abjeto
let user =new User("magb","1234","edemndez@.com");  
user.login("magb","1234");
user.resetPassword("admin");
user.login("magb","admin");
user.updateinfo("edmendezvilla");
Showinfo()


class Product{
    constructor(descripcion,price,stock){
        this.descripcion=descripcion
        this.price=price
        this.stock=stock
    }
    Showinfo(){
        alert(`descripcion:${this.descripcion}, price:${this.price},stock:${this.stock}`)
    }
    minusStock(sold){
        this.stock-=sold
    }
    incrementoStock(){
        this.stock += newstock
    }
    updatePrice(){
        this.price=newprice
    }
}
let product =new Product("IPHONE 15", 1500,5);
product.Showinfo();
product.minusStock();
product.incrementoStock();
product.updatePricePrice();
product.Showinfo();
