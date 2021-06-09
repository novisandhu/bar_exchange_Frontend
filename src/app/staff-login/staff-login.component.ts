import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  staffLogin(staffLoginData: any) {
   // console.log('data');

    this.http.post(this.url + 'staff/staffLogin', staffLoginData).subscribe((res: any) => {
      console.log(res);
      this.serverResponse = res.msg;
      if (this.serverResponse === 'success') {
         this.router.navigateByUrl('staffHome');
       // console.log('success');
      }
    });

  }

}
