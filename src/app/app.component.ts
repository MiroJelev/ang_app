import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Country } from './api/models';
import { CountryService } from './api/services';
import { SiteInfoComponent } from "./feature/site-info/site-info.component";
import { ToolbarComponent } from "./feature/toolbar/toolbar.component";
import { DisplayContentComponent } from "./feature/display-content/display-content.component";
import { SearchComponent } from "./feature/search/search.component";
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteInfoComponent, ToolbarComponent, DisplayContentComponent, SearchComponent, MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miro-app';

  countries: Array<Country> = [];
  filteredCountries: Array<Country> = [];

  filterVal: String = "";

  filterTable(event: any){
    if(event === ""){
      this.filteredCountries = this.countries;
    }
    this.filteredCountries = this.countries.filter((x) => x.name.toLowerCase().includes(event.toLowerCase()));
    
  }

  constructor(
    private _countriesService: CountryService
  ){}

  ngOnInit(){
    this._countriesService.countryRetrieve()
    .subscribe((val: any)=>{
      this.countries = val;
      this.filteredCountries = val;
    })
  }
}
