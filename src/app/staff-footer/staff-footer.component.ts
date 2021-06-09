import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-staff-footer',
  templateUrl: './staff-footer.component.html',
  styleUrls: ['./staff-footer.component.css']
})
export class StaffFooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // // tslint:disable-next-line:triple-equals
    // if (window.location.toString().toLowerCase().indexOf('admin') != -1) {
    //   document.querySelector('#nvLinksStaff').innerHTML = '';
    //   (document.querySelector('#nvLinksStaff') as HTMLDivElement).style.display = 'none';
    // }
    // // tslint:disable-next-line:triple-equals
    // if (window.location.toString().toLowerCase().indexOf('staff') != -1) {
    //   document.querySelector('#nvLinksAdmin').innerHTML = '';
    //   (document.querySelector('#nvLinksStaff') as HTMLDivElement).style.display = 'none';
    // }
  }

}
