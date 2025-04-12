import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Country } from './api/models';
import { CountryService } from './api/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miro-app';

  countries: Array<Country> = [];

  constructor(
    private _countriesService: CountryService
  ){}

  ngOnInit(){
    this._countriesService.countryRetrieve()
    .subscribe((val: any)=>{
      console.log(val);
      this.countries = val;
    })
  }
}
