import { Component, OnInit } from '@angular/core';
import { SearchSearvice } from '../../service/search.service';
import { Item } from '../../Models/item.model';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    productId;
    selectedProduct;

    constructor(
        private route: ActivatedRoute,
        private searchService: SearchSearvice
    ) { }

    ngOnInit() {
        this.productId = this.route.snapshot.params["productId"];
        //console.log("Details for: " + this.productId);
        this.selectedProduct = this.searchService.getProduct(this.productId);
    }
}
