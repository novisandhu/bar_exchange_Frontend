import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cooked-orders',
  templateUrl: './cooked-orders.component.html',
  styleUrls: ['./cooked-orders.component.css']
})
export class CookedOrdersComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';
  getOrderDetails: any;

  constructor(private http: HttpClient) {
    this.getOrderDetailsData();
  }

  ngOnInit(): void {
  }

  getOrderDetailsData() {
    this.http.post(this.url + 'staff/getOrderDetails', {msg: 'cooked'}).subscribe((res: any) => {

      this.getOrderDetails = res;

    });
  }

  changeStatus(detailid: any, orderid, served) {

    this.http.post(this.url + 'staff/changeOrderStatus', {did: detailid, oid: orderid, msg: served}).subscribe((res: any) => {

      this.getOrderDetailsData();

    });
  }
}
