import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";
import {MatSnackBar} from '@angular/material';


export interface upload {
  status: {
    files: {
      fileKey: files[]
    }
  }
}

export interface files {
  container: string;
  name: string;
  type: string;
  field: string;
  originalFilename: string;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public FileNameLast: string ;

  constructor(private http: HttpClient, public snackBar: MatSnackBar) {
  }

  postFile(fileToUpload: File) {
    const endpoint = 'http://localhost:3000/api/HeartData/upload';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post<upload>(endpoint, formData)
      // .subscribe(data => {
      //   //console.log(data.status.files.fileKey[0].name);
      //   console.log(data.status.files.fileKey[0].name);
      //   let massageToShow: string = 'Upload of file    ' + data.status.files.fileKey[0].name + '   completed';
      //   this.snackBar.open(massageToShow, 'Done!', {
      //     duration: 3000,
      //   });
      //   this.FileNameLast = data.status.files.fileKey[0].name;
      //
      //
      //   // do something, if upload success
      // }, error => {
      //   console.log(error);
      // });
  }
}
