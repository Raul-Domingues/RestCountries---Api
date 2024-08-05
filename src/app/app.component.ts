import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'countries';
  faMoon = faMoon;

  countries: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCountriesFlags();
  }

  getCountriesFlags() {
    return (this.countries = this.http.get(
      'https://restcountries.com/v2/all'
    ));
  }
}
