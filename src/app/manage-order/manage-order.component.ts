import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';
  getCategory: any;
  getSubCategory: any;
  getProducts: any;
  cartdata: any;


  constructor(private http: HttpClient) {
    this.getCategoryData();
  }

  ngOnInit(): void {
  }

  getCategoryData() {
    this.http.post(this.url + 'admin/getCategory', {msg: 'onlyCategory'}).subscribe((res: any) => {

      this.getCategory = res;
    });
  }

  getSubCategoryData(categoryName: any) {
    if (categoryName !== '') {
      this.http.post(this.url + 'admin/getSubCategory', {msg: 'onlySubCategory', categoryname: categoryName}).subscribe((res: any) => {
        this.getSubCategory = res;

      });
    }

  }

  getProductsData(subCategoryId) {
    if (subCategoryId !== '') {
      this.http.post(this.url + 'admin/getProducts', {msg: subCategoryId}).subscribe((res: any) => {

        this.getProducts = res;
      });
    }
  }


  addtoCart(productId) {

    let alreadyAdded = false;
    if (this.cartdata !== undefined) {
      for (let data of this.cartdata) {
        if (data.productid === productId) {
          alreadyAdded = true;
          this.http.post(this.url + 'staff/addtoCart', {pid: productId, action: 'plus'}).subscribe((res: any) => {

            this.cartdata = res;


          });
        }
      }
    }


    if (!alreadyAdded) {
      this.http.post(this.url + 'staff/addtoCart', {pid: productId, action: 'new'}).subscribe((res: any) => {

        this.cartdata = res;

        document.getElementById('cartCount').innerText = this.cartdata.length;
        // this.getProducts = res;
      });
    }


  }


}
