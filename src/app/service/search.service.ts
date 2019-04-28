import { Injectable } from  '@angular/core';
import { Http, Headers } from '@angular/http';
import productJson from '../Models/items.json';

@Injectable()
export class SearchSearvice {
    url: string = "http://api.walmartlabs.com/v1/search?";
    apiKey: string = "";
    constructor(private http: Http) {
     }

    searchProducts(searchText: string) {
        const headers = new Headers({
            "content-type":"application/json"
        });
        var searchUrl: string = `${this.url}query=${searchText}&format=json&apiKey=${this.apiKey}`;
        console.log("Final Sesrch URL:" + searchUrl)
        return this.http.get(
            searchUrl,
            {headers: headers}
        );
    }

    getItemsFromFile(searchText: string) {
        var searchReasult = [];
        productJson.items.forEach( item => {
            if(item.name.toLowerCase().includes(searchText.toLowerCase())) {
                searchReasult.push(item);
            }
        });

        return searchReasult;
    }

    getProduct(productId) {
        var selectedItem = productJson.items.filter(item => item.parentItemId.toString() === productId);
        selectedItem[0].longDescription = this.toHTML(selectedItem[0].longDescription);
        return selectedItem[0];
    }

    toHTML(input) : any {
        return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
    }
}