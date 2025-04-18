import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-site-info',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './site-info.component.html',
  styleUrl: './site-info.component.css'
})
export class SiteInfoComponent {

}
