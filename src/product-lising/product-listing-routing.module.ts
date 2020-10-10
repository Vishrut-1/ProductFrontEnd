import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListing } from "./product-listing.component";


const routes: Routes = [
  {
    path: "",
    component: ProductListing,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
})
export class ProductListingRoutingModule {}
