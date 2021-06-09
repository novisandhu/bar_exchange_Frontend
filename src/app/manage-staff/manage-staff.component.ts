import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';
  getStaff: any;
  action = 'Add';
  staffOldUserName = '';
  _staffusername: string = '';
  _password: string = '';
  _email: string = '';
  _mobile: string = '';
  _type: string = '';

  constructor(private http: HttpClient) {
    this.getStaffData();
  }

  ngOnInit(): void {
  }

  getStaffData() {
    this.http.post(this.url + 'admin/getStaff', {msg: ''}).subscribe((res: any) => {

      this.getStaff = res;
    });
  }

  changeAction(actionValue: any) {
    this.action = actionValue;

  }

  deleteStaff(staff: any) {
    this.http.post(this.url + 'admin/deleteStaff', {staffusername: staff}).subscribe((res: any) => {
      this.serverResponse = res.msg;

    });
    this.getStaffData();

  }

  editStaff(editStaffData: any) {

    this._staffusername = editStaffData.staffusername;
    this.staffOldUserName = editStaffData.staffusername;
    this._password = editStaffData.password;
    this._email = editStaffData.email;
    this._mobile = editStaffData.mobile;
    this._type = editStaffData.type;

    this.action = 'Update';


  }

  changeStaffStatus(staffInfo) {
    this.http.post(this.url + 'admin/changeStaffStatus', staffInfo).subscribe((res: any) => {
      this.serverResponse = res.msg;
      this.getStaffData();
    });

  }

  actionOnStaff(staffData: any) {

    this.serverResponse = '';
    if (this.action === 'Add') {
      this.http.post(this.url + 'admin/addStaff', staffData).subscribe((res: any) => {
        this.serverResponse = res.msg;
        this.getStaffData();
      });
    } else if (this.action === 'Update') {
      let formdata = new FormData();
      formdata.append('staffOldUserName', this.staffOldUserName);

      // tslint:disable-next-line:forin
      for (let a in staffData) {
        formdata.append(a, staffData[a]);
        console.log(formdata.get(a));
      }

      this.http.post(this.url + 'admin/updateStaff', formdata).subscribe((res: any) => {
        this.serverResponse = res.msg;
        if (this.serverResponse === 'success') {
          this.staffOldUserName = staffData.staffusername;
          this.getStaffData();

        }
      });
    }


  }

  resetForm(staffForm: any) {
    staffForm.reset();
    this.action = 'Add';
  }
}
