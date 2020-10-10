import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "src/services/product-service";
import { AddProductRoutingModule } from "./add-product-routing.module";
import { AddProductComponent } from "./add-product.component";

@NgModule({
  imports: [
    AddProductRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [AddProductComponent],
})
export class AddProductModule {}
