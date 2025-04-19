import { Component, Input, SimpleChanges } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Country } from '../../api/models';

@Component({
  selector: 'app-display-content',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './display-content.component.html',
  styleUrl: './display-content.component.css'
})
export class DisplayContentComponent {

  @Input() countries: Array<Country> = [];

  displayedColumns: string[] = ['name',  'code', 'capital', 'area'];
  dataSource: MatTableDataSource<Country> = 
              new MatTableDataSource<Country>();

  ngOnChanges(changes: SimpleChanges){
    if(changes['countries'] !== undefined){
      this.dataSource.data = changes['countries'].currentValue;
    }
  }
}
