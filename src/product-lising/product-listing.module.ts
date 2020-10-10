import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { DataTablesModule } from "angular-datatables";
import { FilterPipe } from "src/filter.pipe";
import { ProductListingRoutingModule } from "./product-listing-routing.module";
import { ProductListing } from "./product-listing.component";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ProductListingRoutingModule,
    DataTablesModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [ProductListing, FilterPipe],
})
export class ProductListingModule {}
