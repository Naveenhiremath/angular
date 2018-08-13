import { Component,OnInit} from '@angular/core';
import { ServeService } from './serve.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public serve:ServeService){}
  ngOnInit()
  {
    console.log('gg');
    this.serve.getdata().subscribe(output=>{console.log(output.json())});
  

  }
}
