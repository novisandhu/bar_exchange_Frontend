import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-staff-header',
  templateUrl: './staff-header.component.html',
  styleUrls: ['./staff-header.component.css']
})
export class StaffHeaderComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';
  type = '';
  getCart: any;
  getOrderDetails: any;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get(this.url + 'staff/').subscribe((res: any) => {

      this.serverResponse = res.msg;
      if (!res.msg) {
        this.router.navigateByUrl('staffLogin');
      } else {
        this.type = res.type;
        if (this.type === 'Captain') {
          this.getCartData();
          this.getCookedOrderDetailsData();
        } else if (this.type === 'Kitchen') {
          this.getPendingOrderDetailsData();
        }
      }
      // console.log(this.serverResponse);

    });

  }

  ngOnInit(): void {
  }

  getCartData() {
    this.http.get(this.url + 'staff/getcartProducts').subscribe((res: any) => {

      this.getCart = res;
      if (this.getCart.length !== 0) {
        document.getElementById('cartCount').innerText = this.getCart.length;
      } else {
        document.getElementById('cartCount').innerText = 'empty';
      }
    });
  }

  getCookedOrderDetailsData() {
    this.http.post(this.url + 'staff/getOrderDetails', {msg: 'cooked'}).subscribe((res: any) => {

      this.getOrderDetails = res;

      if (this.getOrderDetails.length !== 0) {
        document.getElementById('cookedOrderCount').innerText = this.getOrderDetails.length;
      } else {
        document.getElementById('cookedOrderCount').innerText = '0';
      }
    });


  }

  getPendingOrderDetailsData() {

    this.http.post(this.url + 'staff/getOrderDetails', {msg: 'pending'}).subscribe((res: any) => {

      this.getOrderDetails = res;
      if (this.getOrderDetails.length !== 0) {
        document.getElementById('pendingOrderCount').innerText = this.getOrderDetails.length;
      } else {
        document.getElementById('pendingOrderCount').innerText = '0';
      }
    });


  }

  logout() {

    this.http.get(this.url + 'staff/staffLogout').subscribe((res: any) => {

      this.serverResponse = res.msg;
      // console.log(this.serverResponse);

    });
  }
}
