import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule} from '../../appmaterial.module';
import { ProductsComponent } from './products.component';
import { SearchSearvice } from '../../service/search.service';
import { ProductService } from '../../service/product.service';
import { ProductComponent } from '../../common/components/product/product.component';
import { SafeHtmlPipe } from '../../pipe/safeHtml';

describe('ProductsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        AppMaterialModule,
        HttpModule,
        BrowserAnimationsModule
      ],
      declarations: [
        ProductsComponent,
        ProductComponent,
        SafeHtmlPipe
      ],
      providers: [
        SearchSearvice,
        ProductService
      ]
    }).compileComponents();
  }));

  it('should create the products', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const products = fixture.debugElement.componentInstance;
    expect(products).toBeTruthy();
  });

  it('should get 9 records for search text "ipod"', inject([SearchSearvice], (service: SearchSearvice)=> {
    const result = service.getItemsFromFile("ipod");
    expect(result.length).toBe(9);
  }));

  it('should have a input field with placeholder text as "Search Text"', ()=> {
    const fixture = TestBed.createComponent(ProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').placeholder).toContain('Search Text');
  });

  it('should have a input field which is mandatory', ()=> {
    const fixture = TestBed.createComponent(ProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    var searchField = compiled.querySelector('input');
    expect(searchField.required).toBe(true);
  });

  it('should have a button of type submit', ()=> {
    const fixture = TestBed.createComponent(ProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    var searchButton = compiled.querySelector('button');
    expect(searchButton.type).toContain('submit');
  });

  it('should have a form element', ()=> {
    const fixture = TestBed.createComponent(ProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  
});
