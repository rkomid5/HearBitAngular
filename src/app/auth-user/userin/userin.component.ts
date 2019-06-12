import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';


import {MatTableDataSource} from '@angular/material';
import {User} from "../../shared/SDK/models";
import {UserApi} from "../../shared/SDK/services/custom";
import {Output, EventEmitter} from "@angular/core";


import {MaperService} from "../asign/maper.service";

@Component({
  selector: 'app-userin',
  templateUrl: './userin.component.html',
  styleUrls: ['./userin.component.css']
})
export class UserinComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<User>;
  selected: SelectionModel<User>;
  @Output() valueChange = new EventEmitter();


  displayedColumns: string[] = ['select','id','email', 'username'];


  constructor(private user: UserApi, private mpSer: MaperService) {
    this.dataSource = new MatTableDataSource([]);
    this.selected = new SelectionModel(false,null);
  }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate =
      (data: User, filters: string) => {
        const matchFilter = [];
        const filterArray = filters.split('+');
        //const columns = [data.feature, data.Tcell];
        const columns = [data.username,data.email];

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
    this.user.find().subscribe((data : User[]) =>{
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
  checkboxLabel(row?: User): string {
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
