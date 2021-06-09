import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  url = 'http://localhost:3000/';
  serverResponse = '';
  getCategory: any;
  action = 'Add';
  categoryOldName = '';
  _categoryname: string = '';
  _description: string = '';
  _supercategory: string = '';

  constructor(private http: HttpClient) {
    this.getCategoryData();
  }

  ngOnInit(): void {
  }

  getCategoryData() {
    this.http.post(this.url + 'admin/getCategory', {msg: ''}).subscribe((res: any) => {

      this.getCategory = res;
    });
  }

  changeAction(actionValue: any) {
    this.action = actionValue;

  }

  deleteCategory(category: any) {
    this.http.post(this.url + 'admin/deleteCategory', {categoryName: category}).subscribe((res: any) => {
      this.serverResponse = res.msg;

    });
    this.getCategoryData();

  }

  editCategory(editCategoryData: any) {

    this.serverResponse = '';
    this._categoryname = editCategoryData.categoryname;
    this.categoryOldName = editCategoryData.categoryname;
    this._description = editCategoryData.categorydescription;
    if (editCategoryData.supercategory !== '' && editCategoryData.supercategory !== undefined && editCategoryData.supercategory !== null) {
      this._supercategory = editCategoryData.supercategory;
    }
    this.action = 'Update';


  }

  actionOnCategory(categoryData: any) {

    this.serverResponse = '';
    if (this.action === 'Add') {
      this.http.post(this.url + 'admin/addCategory', categoryData).subscribe((res: any) => {
        this.serverResponse = res.msg;
        this.getCategoryData();
      });
    } else if (this.action === 'Update') {
      let formdata = new FormData();
      formdata.append('categoryOldName', this.categoryOldName);

      // tslint:disable-next-line:forin
      for (let a in categoryData) {
        formdata.append(a, categoryData[a]);
        console.log(formdata.get(a));
      }

      this.http.post(this.url + 'admin/updateCategory', formdata).subscribe((res: any) => {
        this.serverResponse = res.msg;
        if (this.serverResponse === 'success') {
          this.categoryOldName = categoryData.categoryname;
          this.getCategoryData();

        }
      });
    }


  }

  resetForm(CategoryForm: any) {

    this.serverResponse = '';
    CategoryForm.reset();
    this.action = 'Add';

  }
}
