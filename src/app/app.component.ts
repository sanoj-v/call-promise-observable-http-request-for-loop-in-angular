import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  myCurrentData: Array<any> = [];
  obsevableResponseArray: Array<any> = [];
  promiseResponseArray: Array<any> = [];
  async ngOnInit() {
    for (let i = 0; i < 2; i++) {
      this.http.get<any>('https://api.chucknorris.io/jokes/random').subscribe(data => {
        this.obsevableResponseArray.push(data);
      })
      await this.http.get<any>('https://api.chucknorris.io/jokes/random').toPromise().then(data => {
        this.promiseResponseArray.push(data);
      })
    }
  }
}