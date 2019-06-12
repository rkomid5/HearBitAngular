import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Output, EventEmitter} from "@angular/core";

import {MatTableDataSource} from '@angular/material';
import {Role, User} from "../../shared/SDK/models";
import {RoleApi} from "../../shared/SDK/services/custom";


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Role>;
  selected: SelectionModel<Role>;
  @Output() valueChange = new EventEmitter();



  displayedColumns: string[] = ['select','id','name','created','description','principals'];


  constructor(private roless: RoleApi) {
    this.dataSource = new MatTableDataSource([]);
    this.selected = new SelectionModel(false,null);

  }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate =
      (data: Role, filters: string) => {
        const matchFilter = [];
        const filterArray = filters.split('+');
        //const columns = [data.feature, data.Tcell];
        const columns = [data.name];

        // OR be more specific [data.name, data.race, data.color];

        // Main
        filterArray.forEach(filter => {
          const customFilter = [];
          columns.forEach(column => customFilter.push(column.toLowerCase().includes(filter)));
          matchFilter.push(customFilter.some(Boolean)); // OR
        });
        return matchFilter.every(Boolean); // AND
      };
    //
    // this.http.get<GetDataSource[]>('http://localhost:3000/api/HeartData?filter[limit]=5').subscribe((data: GetDataSource[]) => {
    //
    //   console.log(data);
    //   this.dataSource.data = data;
    // })
    this.roless.find().subscribe((data : Role[]) =>{
      console.log(data);
      this.dataSource.data = data;
    });

  }

  applyFilter(filterValue: string) {
    const filters = filterValue.trim().toLowerCase();
    this.dataSource.filter = filters;
  }


  /** Whether the number of selected elements matches the total number of rows. */

  isAllSelected() {
    const numSelected = this.selected.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selected.clear() :
      this.dataSource.data.forEach(row => this.selected.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Role): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selected.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }


  valueChanged() { // You can give any function name
    this.valueChange.emit(this.selected.selected[0].id);
    console.log(this.selected.selected[0].id);

  }

}
