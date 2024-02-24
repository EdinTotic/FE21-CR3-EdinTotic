import { Injectable } from '@angular/core';
import { IArtikel } from './Iilste';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {
  korb: IArtikel[]=[];

  constructor() { }

  addToCart(ware:IArtikel){
    this.korb.push(ware);
  }

  getCart(){
    return this.korb;
  }
  clearCart(){
    this.korb = [];
    return this.korb;
  }
}
