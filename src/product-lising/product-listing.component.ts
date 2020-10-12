import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { ProductService } from "src/services/product-service";

@Component({
  selector: "app-product-listing",
  templateUrl: "./product-listing.component.html",
  styleUrls: [],
})
export class ProductListing implements OnInit, AfterViewInit {
  products: any;
  ProductForm: FormGroup;
  idOfDataToEdit: any;
  searchText: string;
  viewData: any;
  image: any;
  product_image: any;

  constructor(
    private product_service: ProductService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getProductList();
    this.ProductForm = new FormGroup({
      product_name: new FormControl(),
      product_category: new FormControl(),
      product_price: new FormControl(),
      product_description: new FormControl(),
    });
  }

  categories = [{ name: "Fashion" }, { name: "Electronics" }];
  ngAfterViewInit() {}

  getProductList = () => {
    this.product_service.productListing().subscribe((res) => {
      this.products = res;
    });
  };

  deleteProduct(id) {
    this.product_service.deleteProduct(id).subscribe((res) => {
      console.log(res);
      this.getProductList();
    });
  }

  openEditModal(content, data) {
    console.log(data);
    this.idOfDataToEdit = data.id;
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
    this.ProductForm.patchValue({
      product_name: data.product_name,
      product_price: data.product_price,
      product_description: data.product_description,
      product_category: data.product_category,
    });
  }

  editProduct() {
    const data = { info: this.ProductForm.value, id: this.idOfDataToEdit };
    console.log(data);
    this.product_service.editProduct(data).subscribe((res) => {
      console.log(res);
      this.getProductList();
      this.modalService.dismissAll();
    });
  }

  viewProductModal(viewModal, product) {
    this.viewData = product;
    console.log(this.viewData);
    this.modalService.open(viewModal, { ariaLabelledBy: "modal-basic-title" });
  }
}
