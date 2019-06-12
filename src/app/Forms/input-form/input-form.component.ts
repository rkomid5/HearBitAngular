import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../services.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HeartDataApi} from "../../shared/SDK/services/custom";
import {HeartData} from "../../shared/SDK/models";
import {MatSnackBar} from '@angular/material';

export interface Enum {
  Name: string;
  Value: number;
}

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent implements OnInit {

  fileToUpload: File = null;
  private buttonDis: boolean;
  private FileNamee: string;
  Race: Enum[] = [
    {Name: 'torkaman', Value: 1},
    {Name: 'kord', Value: 2},
    {Name: 'baloch', Value: 3},
    {Name: 'bakhtiari', Value: 4},
    {Name: 'ghashghaiy', Value: 5},
    {Name: 'azari', Value: 6},
    {Name: 'arab', Value: 7},
    {Name: 'aramani', Value: 8},
    {Name: 'ashori', Value: 9},
    {Name: 'afghan', Value: 10},
    {Name: 'lor', Value: 11},
    {Name: 'other', Value: 12},
    {Name: 'fars', Value: 13},

  ];

  Relationss: Enum[] = [
    {Name: 'DD - PA', Value: 1},
    {Name: 'DA - PD', Value: 2},
    {Name: 'Other', Value: 3},
    {Name: 'PA - DA', Value: 4},

  ];

  Labelss: Enum[] = [
    {Name: 'Other', Value: 15},
    {Name: 'PDA', Value: 1},
    {Name: 'ASD', Value: 2},
    {Name: 'VSD', Value: 3},
    {Name: 'Endocardial cushion defect', Value: 4},
    {Name: 'PS', Value: 5},
    {Name: 'AS', Value: 6},
    {Name: 'Coarctation of Aorta', Value: 7},
    {Name: 'TOF', Value: 8},
    {Name: 'TGA', Value: 9},
    {Name: 'Tricuspid Atresia', Value: 10},
    {Name: 'TAPVR', Value: 11},
    {Name: 'LHH', Value: 12},
    {Name: 'Normal', Value: 13},
    {Name: 'innocent murmur', Value: 14},



  ];
  anomaly: Enum[] = [
    {Name: 'No', Value: 6},
    {Name: 'Ear', Value: 1},
    {Name: 'Eye', Value: 2},
    {Name: 'Face', Value: 3},
    {Name: 'Neck', Value: 4},
    {Name: 'limbs', Value: 5},

  ];


  constructor(private svc: ServicesService, private hrtData: HeartDataApi, public snackBar: MatSnackBar) {
    this.buttonDis = false;

  }

  ngOnInit() {
  }

  HeartForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]),
    LastName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]),
    // city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    // state: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    // postal: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    // address: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
    Age: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
    AgeDay: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
    weight: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
    height: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]),
    URL: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
    GestAgeWeek: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.min(19), Validators.max(45)]),
    GestAgeDay: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1), Validators.min(0), Validators.max(7)]),


    ChildDis: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    MotherDisHistory: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    FatherDisHistory: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    OtherUnomaly: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]),


    Medicine: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    AgeOfMother: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
    // MotherRace: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    // FatherRace: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    FamilyRelation: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),

    DigestUnomaly: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
    MotherCigaret: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
    FatherCigaret: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
    MotherAlchol: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
    // MotherJob: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    Chemical: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    HeartPressure: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
    // HeartPressureTime: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
    // HeartPressureType: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    MotherDiabete: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
    MotherDiabeteControled: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),

    label: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),



  });

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    //this.svc.postFile(this.fileToUpload);
    this.buttonDis = true;
    this.svc.postFile(this.fileToUpload)
      .subscribe((data) => {
        //console.log(data.status.files.fileKey[0].name);
        console.log(data.status.files.fileKey[0].name);
        let massageToShow: string = 'Upload of file    ' + data.status.files.fileKey[0].name + '   completed';
        this.snackBar.open(massageToShow, 'Done!', {
          duration: 3000,
        });
        this.HeartForm.value.URL = data.status.files.fileKey[0].name;
        this.FileNamee = data.status.files.fileKey[0].name;


        // do something, if upload success
      }, error => {
        console.log(error);
      });


  }

  onSubmitss() {


    this.HeartForm.value.URL = this.FileNamee;
    this.hrtData.create(this.HeartForm.value).subscribe(data => {

      let massageToShow: string = 'Submit of Form    ' + data + '   completed';
      this.snackBar.open(massageToShow, 'Done!', {
        duration: 3000,
      });

    }, error2 => {
      this.snackBar.open(error2.message, 'Done!', {
        duration: 3000,
      });
      console.log(error2);
    });
    console.log(this.HeartForm.value);


    // this.hrtData.find().subscribe(data => {
    //   console.log(data[0]);
    //
    // });
  }

}
