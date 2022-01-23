import { Component } from '@angular/core';
import Product from 'src/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aigaki-cms';
  products: Product[] = [
    new Product('hello', 21, 'https://picsum.photos/200/300'),
    new Product('world', 13, 'https://picsum.photos/200/300'),
    new Product('lol', 90, 'https://picsum.photos/200/300'),
  ]
}
