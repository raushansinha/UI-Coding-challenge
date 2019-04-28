import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './appmaterial.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { from } from 'rxjs';

import { SearchSearvice } from './service/search.service';
import { ProductService } from './service/product.service';

import { ProductComponent } from '../app/common/components/product/product.component';
import { ProductDetailComponent } from '../app/components/product-detail/product-detail.component';

import { SafeHtmlPipe } from '../app/pipe/safeHtml';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SearchSearvice,
    ProductService,
    SafeHtmlPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
