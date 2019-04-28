import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Item } from '../../../Models/item.model';

import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent {
  @Input() product: Item;
  @Output() onProductNameClicked: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() onProductThumbnailClicked: EventEmitter<Item> = new EventEmitter<Item>();

  currentProduct;


  constructor(private productService: ProductService) { 
  }

  productClicked() {
    this.productService.productClicked.next(this.product.parentItemId);
  }

  toHTML(input) : any {
    return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
}
}
