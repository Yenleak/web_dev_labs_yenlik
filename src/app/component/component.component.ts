import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';
import {CommonModule} from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent],
  templateUrl: './component.component.html'
})
export class ComponentComponent implements OnInit {
  searchTerm = '';
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.products = this.productService.products;
    this.filteredProducts = [...this.products];
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
