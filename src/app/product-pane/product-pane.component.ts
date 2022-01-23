import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/models/product';

@Component({
  selector: 'app-product-pane',
  templateUrl: './product-pane.component.html',
  styles: [
  ]
})
export class ProductPaneComponent implements OnInit {

  constructor() { }

  @Input() product!: Product;
  ngOnInit(): void {
  }

}
