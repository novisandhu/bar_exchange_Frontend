import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
  }

  adminLogin(adminLoginData: any) {
    console.log('data');

    this.http.post(this.url + 'admin/adminLogin', adminLoginData).subscribe((res: any) => {
      console.log(res);
      this.serverResponse = res.msg;
      if (this.serverResponse === 'success') {
        this.router.navigateByUrl('adminHome');
      }
    });

  }
}
