import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-manage-stock',
  templateUrl: './manage-stock.component.html',
  styleUrls: ['./manage-stock.component.css']
})
export class ManageStockComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';
  paramValue: any;
  getProducts: any;
  getStock: any;
  _productname: string = '';


  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.getStockData();
    this.paramValue = this.route.snapshot.paramMap.get('productid');
    this.getProductsData();

  }

  ngOnInit(): void {
    if (this.paramValue !== 'nullid') {

      document.getElementById('icon').click();
      this._productname = this.paramValue;

    }

  }

  getProductsData() {
    this.http.post(this.url + 'admin/getProducts', {msg: 'onlyProducts'}).subscribe((res: any) => {

      this.getProducts = res;
    });
  }

  getStockData() {
    this.http.post(this.url + 'admin/getStock', {msg: ''}).subscribe((res: any) => {

      this.getStock = res;
    });
  }

  addStock(stockData: any) {
    this.serverResponse = '';
    this.http.post(this.url + 'admin/addStockData', stockData).subscribe((res: any) => {
      // console.log(res);
      this.serverResponse = res.msg;
    });
  }

  resetForm(stockForm: any) {

    this.serverResponse = '';
    stockForm.reset();
    if (this.paramValue !== 'nullid') {
      this._productname = this.paramValue;

    }

  }
}
