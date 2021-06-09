import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-staff-change-password',
  templateUrl: './staff-change-password.component.html',
  styleUrls: ['./staff-change-password.component.css']
})
export class StaffChangePasswordComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';
  passwordMatch = true;
  currentPasswordCheck = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  checkCurrentPassword(currentPassword) {
    let msg = {currentPass: currentPassword};

    this.http.post(this.url + 'staff/checkCurrentPassword', msg).subscribe((res: any) => {

      this.currentPasswordCheck = res.msg;

    });

  }

  matchPassword(newPassword, confirmPassword) {
    if (newPassword.value !== '' && confirmPassword.value !== '') {
      if (newPassword.value !== confirmPassword.value) {
        this.passwordMatch = false;
      } else {
        this.passwordMatch = true;
      }
    }

  }

  staffChangePassword(newPassword: any) {
    this.http.post(this.url + 'staff/staffChangePassword', {newPass: newPassword}).subscribe((res: any) => {

      this.serverResponse = res.msg;

    });
  }

}
