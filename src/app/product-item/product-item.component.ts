import {Component, input, OnInit, output} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes++;
}
  remove() {
    this.delete.emit(this.product().id);
  }
  share() {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(this.product().link)}`,
      '_blank'
    );
  }
}
