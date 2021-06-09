import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';
  passwordMatch = true;
  currentPasswordCheck = true;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  checkCurrentPassword(currentPassword) {
    let msg = {currentPass: currentPassword};

    this.http.post(this.url + 'admin/checkCurrentPassword', msg).subscribe((res: any) => {

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

  adminChangePassword(newPassword: any) {
    this.http.post(this.url + 'admin/adminChangePassword', {newPass: newPassword}).subscribe((res: any) => {

      this.serverResponse = res.msg;

    });
  }

}
