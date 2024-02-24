import { Component, OnInit } from '@angular/core';
import { artikel } from '../liste';
import { IArtikel as Iliste } from '../Iilste';
import { WarenkorbService } from '../warenkorb.service';

@Component({
  selector: 'app-produkte',
  templateUrl: './produkte.component.html',
  styleUrl: './produkte.component.css'
})
export class ProdukteComponent implements OnInit{
  ware: Iliste[] = [] ;
  
  constructor(private CS: WarenkorbService) {
    this.ware= artikel
  }

  ngOnInit(): void {
   
  }

  addToCart(ware:Iliste) {
    if (ware) {
      this.CS.addToCart(ware);
    }
  }
}
