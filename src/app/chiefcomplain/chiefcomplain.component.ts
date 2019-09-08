import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators, FormGroup, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-chiefcomplain',
  templateUrl: './chiefcomplain.component.html',
  styleUrls: ['./chiefcomplain.component.css']
})
export class ChiefcomplainComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  submmited: boolean = false;
  familyDataForm: any;

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private http:HttpClient, private fb: FormBuilder) { 
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'MM/DD/YYYY'
      });
  }

  ngOnInit() {
    this.familyDataForm = this.fb.group({
      id :[this.activatedRoute.snapshot.params['id']],
      Complaint : this.fb.array([
        this.addFormGroups()
      ])
    });
  }
  
  addFormGroups(){
    return this.fb.group({
      Complaint : ['',[Validators.required]],
      ComplaintDuration : ['',[Validators.required]]
    });
  }

  addComplaintButtonClick(){
    (<FormArray>this.familyDataForm.get('Complaint')).push(this.addFormGroups());
  }

  removeComplaintButtonClick(GroupIndex){
    (<FormArray>this.familyDataForm.get('Complaint')).removeAt(GroupIndex);
  }

  onSubmit(formData){
    this.submmited = true;
    if(this.familyDataForm.valid){
      // console.log(formData);
      this.http.post('https://digitalapp001.herokuapp.com/api/pat/addcomplain',formData).subscribe(res => {this.resetForm()});
    }
  }

  resetForm(){
    this.familyDataForm.reset({
      Complaint : '',
      ComplaintDuration : ''
    });
  }

  gotoIllness(){
    this.router.navigate(['dashboard/illness',{id : this.activatedRoute.snapshot.params['id']}]);
  }

}

