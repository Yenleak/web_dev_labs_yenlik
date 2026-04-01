import { Component, signal, computed, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';

// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent], // Убрал ComponentComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public service = inject(ProductService);

  selectedCategoryID = signal<number>(0);
  searchTerm = signal<string>('');

  filteredProducts = computed(() => {
    const categoryId = this.selectedCategoryID();
    const term = this.searchTerm().toLowerCase();

    const allProducts = categoryId
      ? this.service.getProductsByCategory(categoryId)
      : [];

    return (allProducts || []).filter(p =>
      p.name.toLowerCase().includes(term)
    );
  });

  selectCategory(id: number) {
    this.selectedCategoryID.set(id);
  }
}
