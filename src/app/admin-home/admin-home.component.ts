import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {


  url = 'http://localhost:3000/';
  serverResponse = '';
  categoryCount = 0;
  subCategoryCount = 0;
  productCount = 0;
  staffCount = 0;
  orderCount = 0;
  dailyOrderCount = 0;
  monthlyOrderCount = 0;
  yearlyOrderCount = 0;
  betweenOrderData: any = [];
  betweenOrderData2: any = '';
  dailyStockCount = 0;

  constructor(private http: HttpClient) {
    this.getCategoryCount();
    this.getSubCategoryCount();
    this.getProductCount();
    this.getStaffCount();
    this.getOrdersCount();
    this.getDailyOrdersCount();
    this.getMonthlyOrdersCount();
    this.getYearlyOrdersCount();
  }

  ngOnInit(): void {
  }

  getCategoryCount() {
    this.http.post(this.url + 'admin/getCategory', {msg: 'categoryCount'}).subscribe((res: any) => {

      this.categoryCount = res[0].catTotal;
    });
  }

  getSubCategoryCount() {
    this.http.post(this.url + 'admin/getSubCategory', {msg: 'subCategoryCount'}).subscribe((res: any) => {

      this.subCategoryCount = res[0].subcatTotal;
    });
  }

  getProductCount() {
    this.http.post(this.url + 'admin/getProducts', {msg: 'productCount'}).subscribe((res: any) => {

      this.productCount = res[0].productTotal;
    });
  }

  getStaffCount() {
    this.http.post(this.url + 'admin/getStaff', {msg: 'staffCount'}).subscribe((res: any) => {

      this.staffCount = res[0].staffTotal;
    });
  }

  getOrdersCount() {
    this.http.post(this.url + 'staff/getOrderDetails', {msg: 'orderCount'}).subscribe((res: any) => {

      this.orderCount = res[0].orderTotal;
    });
  }

  getDailyOrdersCount() {
    this.http.post(this.url + 'staff/getOrderDetails', {msg: 'dailyOrderCount'}).subscribe((res: any) => {

      this.dailyOrderCount = res[0].dailyOrderTotal;
    });
  }

  getMonthlyOrdersCount() {
    this.http.post(this.url + 'staff/getOrderDetails', {msg: 'monthlyOrderCount'}).subscribe((res: any) => {

      this.monthlyOrderCount = res[0].monthlyOrderTotal;
    });
  }

  getYearlyOrdersCount() {
    this.http.post(this.url + 'staff/getOrderDetails', {msg: 'yearlyOrderCount'}).subscribe((res: any) => {

      this.yearlyOrderCount = res[0].yearlyOrderTotal;
    });
  }

  getDailyStockCount() {
    this.http.post(this.url + 'admin/getStock', {msg: 'dailyStockCount'}).subscribe((res: any) => {

      this.dailyStockCount = res[0].dailyStockTotal;
    });
  }

  // Order From & To
  getBetweenOrdersCount(fromToDate: any) {
    let formdata = new FormData();
    formdata.append('msg', 'betweenOrderCount');
    // tslint:disable-next-line:forin
    for (let a in fromToDate) {
      formdata.append(a, fromToDate[a]);
    }
    this.http.post(this.url + 'staff/getOrderDetails', formdata).subscribe((res: any) => {
      // console.log(res);
      if (res == '') {
        this.betweenOrderData = [];
        this.betweenOrderData2 = 'noOrdersFound';
      } else {
        this.betweenOrderData2 = '';
        this.betweenOrderData = res;
      }
      // this.betweenOrderData = res;
    });
  }
}
