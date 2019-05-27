import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: any;
  test_takers;

  constructor(private http: Http) {
    // http.get('http://localhost:3000/books.json')
    //   .subscribe(res => this.books = res.json());
    http.get('http://localhost:3000/api/v1/test_takers')
      .subscribe(res =>

	      this.test_takers = res.json().test_takers
      );
    // http.get('http://localhost:3000/api/v1/test_takers','Access-Control-Allow-Origin')
    //   .subscribe(res => this.test_takers = res.json());

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.test_takers
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }  
}