import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';

  constructor(private http: HttpClient, private router: Router) {
    this.http.get(this.url + 'admin/').subscribe((res: any) => {

      this.serverResponse = res.msg;
      if (!res.msg) {
        this.router.navigateByUrl('adminLogin');
      }
      console.log(this.serverResponse);

    });
  }

  ngOnInit(): void {
    // console.log('menu');

    let allsubmenu = document.querySelectorAll('.nav-second-level');
    console.log(allsubmenu);
    allsubmenu.forEach((mn: any) => {
      (mn as HTMLUListElement).classList.add('collapse');
      console.log(mn);
    });
    // let allsubmenu1 = document.querySelectorAll('#anchor');
    // console.log(allsubmenu1);
    // allsubmenu1.forEach((mn: any) => {
    //   (mn as HTMLUListElement).classList.add('active');
    //   console.log(mn);
    // });
  }

  logout() {

    this.http.get(this.url + 'admin/adminLogout').subscribe((res: any) => {
      // console.log(res);
      if(res.msg == 'Logout') {
        this.router.navigateByUrl('/');
      }

      // this.serverResponse = res.msg;
      // console.log(this.serverResponse);

    });
  }
}
