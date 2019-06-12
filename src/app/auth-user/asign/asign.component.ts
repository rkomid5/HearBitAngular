import { Component, OnInit,Input} from '@angular/core';
import {RoleMappingApi} from "../../shared/SDK/services/custom";
import {RoleMapping} from "../../shared/SDK/models";

import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-asign',
  templateUrl: './asign.component.html',
  styleUrls: ['./asign.component.css']
})
export class AsignComponent implements OnInit {

  isLinear = false;
  userForm: FormGroup;
  rolesForm: FormGroup;
  userSelected :boolean;
  RoleSelected:boolean;



  constructor(private asign: RoleMappingApi) {

    this.userForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.minLength(24),Validators.maxLength(24)]),
      roleId: new FormControl('', [Validators.required, Validators.minLength(24),Validators.maxLength(24)]),
      type: new FormControl('USER', [Validators.required, Validators.minLength(4),Validators.maxLength(4)]),

    });
    this.userSelected = false;
    this.RoleSelected = false;

  }

  ngOnInit() {
  }


  getUserIdFromChild(event: string){
    console.log(event);
    console.log('done');
    this.userForm.value.userId = event;
    this.userSelected = true;

  }

  getRoleIdFromChild(event: string){
    console.log(event);
    console.log('done R');
    this.userForm.value.roleId = event;
    this.RoleSelected = true ;

  }


}
