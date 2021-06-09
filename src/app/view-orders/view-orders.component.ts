import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';
  getOrderDetails: any = [];

  orderCount = 0;
  dailyOrderCount = 0;
  monthlyOrderCount = 0;
  yearlyOrderCount = 0;
  betweenOrderData: any = [];

  constructor(private http: HttpClient) {

    this.getOrderDetailsData();

    this.getOrdersCount();
    this.getDailyOrdersCount();
    this.getMonthlyOrdersCount();
    this.getYearlyOrdersCount();
  }

  ngOnInit(): void {
  }

  getOrderDetailsData() {
    this.http.post(this.url + 'staff/getOrderDetails', {msg: ''}).subscribe((res: any) => {

      this.getOrderDetails = res;
      // document.getElementById('orderHistoryCount').innerText = this.getOrderDetails.length;
    });
  }

  getOrdersCount() {
    this.http.post(this.url + 'staff/getOrderDetails', {msg: 'stafforderCount'}).subscribe((res: any) => {

      this.orderCount = res[0].orderTotal;
    });
  }

  getDailyOrdersCount() {
    this.http.post(this.url + 'staff/getOrderDetails', {msg: 'staffdailyOrderCount'}).subscribe((res: any) => {

      this.dailyOrderCount = res[0].dailyOrderTotal;
    });
  }

  getMonthlyOrdersCount() {
    this.http.post(this.url + 'staff/getOrderDetails', {msg: 'staffmonthlyOrderCount'}).subscribe((res: any) => {

      this.monthlyOrderCount = res[0].monthlyOrderTotal;
    });
  }

  getYearlyOrdersCount() {
    this.http.post(this.url + 'staff/getOrderDetails', {msg: 'staffyearlyOrderCount'}).subscribe((res: any) => {

      this.yearlyOrderCount = res[0].yearlyOrderTotal;
    });
  }

  getBetweenOrdersCount(fromToDate: any) {
    let formdata = new FormData();
    formdata.append('msg', 'staffbetweenOrderCount');

    // tslint:disable-next-line:forin
    for (let a in fromToDate) {
      formdata.append(a, fromToDate[a]);
    }
    this.http.post(this.url + 'staff/getOrderDetails', formdata).subscribe((res: any) => {

      this.getOrderDetails = res;
    });
  }
}
