import { Component, OnInit } from "@angular/core";
import { Form, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "src/services/product-service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: [],
})
export class AddProductComponent implements OnInit {
  ProductForm: FormGroup;
  submitted = false;

  constructor(
    private product_service: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories;
    this.ProductForm = new FormGroup({
      product_image: new FormControl(),
      product_name: new FormControl("", [Validators.required]),
      product_category: new FormControl("", [Validators.required]),
      product_price: new FormControl("", [Validators.required]),
      product_description: new FormControl("", [Validators.required]),
    });
  }

  get f() {
    return this.ProductForm.controls;
  }

  categories = [{ name: "Fashion" }, { name: "Electronics" }];

  onFileChange(event) {
    const file = event.target.files[0];
    console.log(file);
    this.ProductForm.get("product_image").setValue(file);
  }

  onSubmit = () => {
    this.submitted = true;

    if (this.ProductForm.invalid) {
      return;
    } else {
      const formData = new FormData();
      formData.append(
        "product_image",
        this.ProductForm.get("product_image").value
      );
      formData.append(
        "product_name",
        this.ProductForm.get("product_name").value
      );
      formData.append(
        "product_category",
        this.ProductForm.get("product_category").value
      );
      formData.append(
        "product_price",
        this.ProductForm.get("product_price").value
      );
      formData.append(
        "product_description",
        this.ProductForm.get("product_description").value
      );

      console.log(formData);
      // const data = this.ProductForm.value;
      this.product_service.addProduct(formData).subscribe((res) => {
        console.log(res);
        this.router.navigate(["/product-listing"]);
      });
    }
  };
}
