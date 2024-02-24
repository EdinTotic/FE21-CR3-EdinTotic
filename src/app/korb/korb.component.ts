import { Component, OnInit } from '@angular/core';
import { IArtikel } from '../Iilste';
import { WarenkorbService } from '../warenkorb.service';

@Component({
  selector: 'app-korb',
  templateUrl: './korb.component.html',
  styleUrl: './korb.component.css',
})
export class KorbComponent implements OnInit {
  korb: IArtikel[] = [];
  
  getSumme(){
    return this.korb.reduce((prev,curr) => prev + (curr.preis ?? 0), 0);
    
  }
  getService(){

    return this.getSumme()*0.1;
  }


  getRabatt(){
    if(this.getSumme() >= 40){
      return this.getSumme()*0.15;
    }else{
      return 0;
    }
  }
  getAll(){
    return this.getSumme()-this.getRabatt()+this.getService();
  }
  constructor(private CS: WarenkorbService){};
  ngOnInit(): void {
    this.korb= this.CS.getCart();
  }
  clear(){
    this.korb = this.CS.clearCart();
  }

}
