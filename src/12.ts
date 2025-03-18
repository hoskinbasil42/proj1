
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-proj1',
  templateUrl: './proj1.component.html',
  styleUrls: ['./proj1.component.css']
})
export class Proj1Component {
  public data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.example.com/data').subscribe((response: any) => {
      this.data = response;
    });
  }
}