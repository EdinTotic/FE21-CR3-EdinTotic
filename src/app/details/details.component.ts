import { Component, OnInit } from '@angular/core';
import { IArtikel } from '../Iilste';
import { ActivatedRoute } from '@angular/router';
import { artikel } from '../liste';
import { WarenkorbService } from '../warenkorb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  ware: IArtikel | undefined = {} as IArtikel;
  id: number = 0;

  constructor(private route: ActivatedRoute, private CS: WarenkorbService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.ware = artikel.find((e) => e.id === this.id);
  }

  addToCart() {
    if (this.ware) {
      this.CS.addToCart(this.ware);
    }
  }
}
