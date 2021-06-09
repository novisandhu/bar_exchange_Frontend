import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  url = 'http://localhost:3000/';
  serverResponse = '';
  getCategory: any;
  getSubCategory: any;
  getProducts: any;
  action = 'Add';
  productid = '';
  photo: string;
  oldPhoto = '';
  _categoryname: string = '';
  _subcategoryname: string = '';
  _productname: string = '';
  _price: any = '';
  _discount: string = '';
  _photo: string = '';
  _productdescription: string = '';

  isphoto: boolean = true;

  constructor(private http: HttpClient) {
    this.getCategoryData();
    this.getProductsData();
  }

  ngOnInit(): void {
  }

  getCategoryData() {
    this.http.post(this.url + 'admin/getCategory', {msg: 'onlyCategory'}).subscribe((res: any) => {

      this.getCategory = res;
    });
  }

  getProductsData() {
    this.http.post(this.url + 'admin/getProducts', {msg: ''}).subscribe((res: any) => {

      this.getProducts = res;
    });
  }

  getSubCategoryData(categoryName: any) {
    if (categoryName !== '') {
      this.http.post(this.url + 'admin/getSubCategory', {msg: 'onlySubCategory', categoryname: categoryName}).subscribe((res: any) => {
        this.getSubCategory = res;

      });
    }

  }

  changeAction(actionValue: any) {
    this.action = actionValue;
    this.getCategoryData();

  }

  deleteProduct(productid: any) {
    // console.log(subcategoryid);
    if (confirm('are you sure to delete ?')) {
      this.http.post(this.url + 'admin/deleteProduct', {pid: productid}).subscribe((res: any) => {

        this.serverResponse = res.msg;
        this.getProductsData();

      });
    }
  }

  editProduct(editProductsData: any) {
    this.isphoto = false;
    this.getCategoryData();
    this.serverResponse = '';
    this.action = 'Update';
    this.productid = editProductsData.productid;
    this._categoryname = editProductsData.categoryname;
    this.getSubCategoryData(editProductsData.categoryname);
    this._productdescription = editProductsData.description;
    this._subcategoryname = editProductsData.subcategoryid;
    this._productname = editProductsData.productname;
    this._price = editProductsData.price;
    this._discount = editProductsData.discount;
    (document.getElementById('img1') as HTMLInputElement).src = this.url + editProductsData.photo;
    this.photo = '';

  }

  getFile(event: any) {
    this.photo = event.target.files[0];
    console.log('getFile' + this.photo);
  }

  actionOnProducts(productsData: any) {
    this.serverResponse = '';
    let formdata = new FormData();
    // Add
    if (this.action === 'Add') {
      formdata.append('photo', this.photo);
      formdata.append('oldPhoto', this.oldPhoto);
      // tslint:disable-next-line:forin
      for (let a in productsData) {
        formdata.append(a, productsData[a]);
      }
      this.http.post(this.url + 'admin/addProductsData', formdata).subscribe((res: any) => {

        this.serverResponse = res.msg;
        if (this.serverResponse === 'success') {
          (document.getElementById('prodForm') as HTMLFormElement).reset();
          this.getProductsData();
        }
      });
    }
    // Update
    else if (this.action === 'Update') {
      formdata.append('photo', this.photo);
      if (this.photo !== '') {
        formdata.append('oldPhoto', this.oldPhoto);
      }
      formdata.append('productid', this.productid);
      for (let a in productsData) {
        formdata.append(a, productsData[a]);
      }

      this.http.post(this.url + 'admin/updateProducts', formdata).subscribe((res: any) => {
        // console.log(res);
        this.serverResponse = res.msg;
        if (this.serverResponse === 'success') {
          this.getProductsData();
        }
      });
    }
  }

  resetForm(productsForm: any) {

    this.serverResponse = '';
    productsForm.reset();
    this.action = 'Add';
  }
}
