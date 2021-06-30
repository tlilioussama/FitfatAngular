import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { ShowAllProductsComponent } from './show-all-products/show-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ShowAllProductsByCategoryComponent } from './show-all-products-by-category/show-all-products-by-category.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ShowProductComponent,
    ShowAllProductsComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ShowAllProductsByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
