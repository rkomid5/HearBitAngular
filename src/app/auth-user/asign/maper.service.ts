import { Injectable } from '@angular/core';
import {RoleMapping} from "../../shared/SDK/models";
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class MaperService {

  userForm: FormGroup;



  constructor() {
    this.userForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.minLength(24),Validators.maxLength(24)]),
      role: new FormControl('', [Validators.required, Validators.minLength(24),Validators.maxLength(24)]),
      type: new FormControl('USER', [Validators.required, Validators.minLength(4),Validators.maxLength(4)]),

    });
  }
}
