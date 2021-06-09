import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {
  url = 'http://localhost:3000/';
  serverResponse = '';
  getCategory: any;
  getSubCategory: any;
  subcategoryid;
  action = 'Add';
  _categoryname: string = '';
  _subcategoryname: string = '';
  _subcategorydescription: string = '';

  constructor(private http: HttpClient) {
    this.getCategoryData();
    this.getSubCategoryData();
  }

  ngOnInit(): void {
  }

  getCategoryData() {
    this.http.post(this.url + 'admin/getCategory', {msg: 'onlyCategory'}).subscribe((res: any) => {
      this.getCategory = res;
    });
  }

  getSubCategoryData() {
    this.http.post(this.url + 'admin/getSubCategory', {msg: ''}).subscribe((res: any) => {
      this.getSubCategory = res;
    });
  }

  changeAction(actionValue: any) {
    this.action = actionValue;
    this.getCategoryData();

  }

  deleteCategory(subcategoryid: any) {
    console.log(subcategoryid);
    this.http.post(this.url + 'admin/deleteSubCategory', {subid: subcategoryid}).subscribe((res: any) => {
      this.serverResponse = res.msg;
      this.getSubCategoryData();

    });

  }

  editCategory(editCategoryData: any) {

    this.serverResponse = '';
    this.getCategoryData();
    this._categoryname = editCategoryData.categoryname;
    this._subcategoryname = editCategoryData.subcategoryname;
    this._subcategorydescription = editCategoryData.subcategorydescription;
    this.action = 'Update';
    this.subcategoryid = editCategoryData.subcategoryid;


  }

  actionOnSubCategory(subCategoryData: any) {

    this.serverResponse = '';
    if (this.action === 'Add') {
      this.http.post(this.url + 'admin/addSubCategory', subCategoryData).subscribe((res: any) => {
        this.serverResponse = res.msg;
        if (this.serverResponse === 'success') {
          this.getSubCategoryData();
        }
      });
    } else if (this.action === 'Update') {

      let formdata = new FormData();
      for (let a in subCategoryData) {
        formdata.append(a, subCategoryData[a]);

      }

      this.http.post(this.url + 'admin/updateSubCategory', formdata).subscribe((res: any) => {
        this.serverResponse = res.msg;
        if (this.serverResponse === 'success') {
          this.getSubCategoryData();
        }
      });
    }


  }

  resetForm(subCategoryForm: any) {
    this.serverResponse = '';
    subCategoryForm.reset();
    this.action = 'Add';
  }
}
