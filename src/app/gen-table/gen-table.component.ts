import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';


import {HttpClient} from "@angular/common/http";

import {MatTableDataSource} from '@angular/material';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {InputFormComponent} from "../Forms/input-form/input-form.component";
import {HeartDataApi} from "../shared/SDK/services/custom";


export interface GetDataSource {
  Age: number,
  AgeDay: number,
  FirstName: string,
  LastName: string,
  URL: string,
  address: string,
  city: string,
  height: number,
  label: string,
  postal: number,
  state: string,
  weight: number,

}

//
//
// const ELEMENT_DATA: GetDataSource[] = [
//   {
//     Age: 12,
//     FirstName: "dion",
//     LastName: "ksdj",
//     URL: "1554916463486_govahimovaghat.jpg",
//     address: "ksjdnskldfsd ff ksdf",
//     city: "sdjkf",
//     height: 12,
//     label: "normal",
//     postal: 123456789123456,
//     state: "kjfsn",
//     weight: 12,
//   },
//   ]
// ;


@Component({
  selector: 'app-gen-table',
  templateUrl: './gen-table.component.html',
  styleUrls: ['./gen-table.component.css']
})
export class GenTableComponent implements OnInit {

  private filters: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<GetDataSource>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['FirstName', 'LastName', 'Age', 'AgeDay', 'weight', 'height', 'label', 'URL'];


  constructor(private http: HttpClient, private dialog: MatDialog, private hrtData: HeartDataApi) {

    this.dataSource = new MatTableDataSource([]);

  }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource(ELEMENT_DATA);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate =
      (data: GetDataSource, filters: string) => {
        const matchFilter = [];
        const filterArray = filters.split('+');
        //const columns = [data.feature, data.Tcell];
        const columns = [data.FirstName, data.label];

        // OR be more specific [data.name, data.race, data.color];

        // Main
        filterArray.forEach(filter => {
          const customFilter = [];
          columns.forEach(column => customFilter.push(column.toLowerCase().includes(filter)));
          matchFilter.push(customFilter.some(Boolean)); // OR
        });
        return matchFilter.every(Boolean); // AND
      };

    this.http.get<GetDataSource[]>('http://localhost:3000/api/HeartData?filter[order]=id%20DESC').subscribe((data: GetDataSource[]) => {

      this.dataSource.data = data;
    })

  }

  // applyFilter(filterValue: string) {
  //
  //   this.filters = filterValue.split(',');
  //   console.log(this.filters);
  //   this.dataSource.filter = filterValue;
  //   //this.filters.forEach(filter => this.dataSource );
  //
  // }
  applyFilter(filterValue: string) {
    const filters = filterValue.trim().toLowerCase();
    this.dataSource.filter = filters;
  }

  addDialog(): void {


    const dialogRef = this.dialog.open(InputFormComponent, {
      width: '80%',
      height: '95%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.http.get<GetDataSource[]>('http://localhost:3000/api/HeartData?filter[order]=id%20DESC').subscribe((data: GetDataSource[]) => {

        this.dataSource.data = data;
      })

      // this.hrtData.find().subscribe((data : GetDataSource[]) =>{
      //   this.dataSource.data = data;
      // })


    });


  }


}
