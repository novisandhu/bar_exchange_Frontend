import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface ICustomWindow extends Window {
  __custom_global_stuff: string;
}

function getWindow(): any {
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class RazorService {
  URL = 'http://localhost:3000';

  get nativeWindow(): ICustomWindow {
    return getWindow();
  }

  constructor(private http: HttpClient) {
  }
}
