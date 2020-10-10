import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AddProductModule } from "src/add-product/add-product.module";
import { ProductListingModule } from "src/product-lising/product-listing.module";

const routes: Routes = [
  {
    path: "add-product",
    loadChildren: () =>
      import("../add-product/add-product.module").then(
        (m) => m.AddProductModule
      ),
  },
  {
    path: "product-listing",
    loadChildren: () =>
      import("../product-lising/product-listing.module").then(
        (m) => m.ProductListingModule
      ),
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AddProductModule,
    ProductListingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
