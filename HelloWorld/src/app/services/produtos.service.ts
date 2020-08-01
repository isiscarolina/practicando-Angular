import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  products: any [];

  constructor() {
    this.products = [
    "Chocolate",
    "cafe",
    "batata frita",
    "pipoca",
    "coca Cola",
    "banana"
    ];
   }
  
  getProducts(): any {
    return this.products;
  }
}
