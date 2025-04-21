import { Component, Input, SimpleChanges } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Country } from '../../api/models';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DetailsViewComponent } from "../details-view/details-view.component";

@Component({
  selector: 'app-display-content',
  standalone: true,
  imports: [MatTableModule, MatIconModule, CommonModule, DetailsViewComponent],
  templateUrl: './display-content.component.html',
  styleUrl: './display-content.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0'})),
      state('expanded', style({ height: '*', padding: '1rem'})),
      transition(
        'expanded <=> collapsed',
        animate('.5s cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class DisplayContentComponent {

  expandedRows: Array<Country> = [];

  @Input() countries: Array<Country> = [];

  displayedColumns: string[] = ['expand', 'name',  'code', 'capital'];
  dataSource: MatTableDataSource<Country> = 
              new MatTableDataSource<Country>();

  ngOnChanges(changes: SimpleChanges){
    if(changes['countries'] !== undefined){
      this.dataSource.data = changes['countries'].currentValue;
    }
  }

  toggleRow(row: Country) {
    const index = this.expandedRows.findIndex((x) => x.code === row.code);
    if(index === -1){
      this.expandedRows.push(row);
    } else{
      this.expandedRows.splice(index, 1);
    }
  }
  isExpanded(row: Country): Boolean{
    if(this.expandedRows.findIndex((x) => x.code === row.code) !== -1){
      return true;
    }else{
      return false;
    }
  }
}
