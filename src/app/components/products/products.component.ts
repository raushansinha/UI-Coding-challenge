import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { SearchSearvice } from '../../service/search.service';
import { ProductService } from '../../service/product.service';
import { Item } from '../../Models/item.model';
import { Subscription } from 'rxjs';


@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit, OnDestroy{
    title = 'Product Search';

    products = [];

    productClickedSubscription: Subscription;

    constructor(
        private router: Router,
        private productService: ProductService,
        private searchService: SearchSearvice
    ) { }

    ngOnInit() { 
       this.productClickedSubscription = this.productService.productClicked.subscribe(productId => {
           this.router.navigate(['../product/' + productId]);
       })
     } 

     ngOnDestroy() {
         if(this.productClickedSubscription) {
             this.productClickedSubscription.unsubscribe();
         }
     }

    onSubmit(form: NgForm) {
        console.log(form.controls.searchText.value);
        // this.searchService.searchProducts(form.controls.searchText.value)
        // .subscribe( 
        //     (response: Response) => { 
        //         console.log(response); 
        //         this.products = response.json();
        //     },
        //     (error) => { console.log(error); }
        // );

        this.products = this.searchService.getItemsFromFile(form.controls.searchText.value);
        //console.log(this.products);
    }
}
