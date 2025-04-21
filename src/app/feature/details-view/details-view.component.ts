import { Component, Input } from '@angular/core';
import { Country } from '../../api/models';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-details-view',
  standalone: true,
  imports: [MatTabsModule, MatListModule],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.css'
})
export class DetailsViewComponent {
  @Input() country?: Country;
}
