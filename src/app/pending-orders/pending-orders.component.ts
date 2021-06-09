import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';
  getOrderDetails: any;

  constructor(private http: HttpClient) {
    this.getOrderDetailsData();
  }

  ngOnInit(): void {
  }

  getOrderDetailsData() {
    this.http.post(this.url + 'staff/getOrderDetails', {msg: 'pending'}).subscribe((res: any) => {

      this.getOrderDetails = res;

    });
  }

  changeStatus(detailid: any, cooked) {

    this.http.post(this.url + 'staff/changeOrderStatus', {did: detailid, msg: cooked}).subscribe((res: any) => {

      this.getOrderDetailsData();

    });
  }
}
