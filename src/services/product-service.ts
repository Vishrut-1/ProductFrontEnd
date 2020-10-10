import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct = (data) => {
    return this.http.post(environment.api + "add-product", data);
  };

  productListing = () => {
    return this.http.get(environment.api + "product-listing");
  };

  deleteProduct = (id) => {
    return this.http.post(environment.api + "delete-product", { id: id });
  };

  editProduct = (data) => {
    return this.http.post(environment.api + "edit-product", data);
  };
}
