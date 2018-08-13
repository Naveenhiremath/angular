import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({

  providedIn: 'root'
})
export class ServeService {

  constructor(private http:Http) { }
  getdata()
  {
    let url='assets/example.json';
    return this.http.get(url);
  }
 
}
