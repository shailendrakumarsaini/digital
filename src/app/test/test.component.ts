import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators, FormGroup, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  id;
  iid;
  datePickerConfig: Partial<BsDatepickerConfig>;
  constructor(private arout:ActivatedRoute,private router:Router,private http:HttpClient,private fb: FormBuilder) { 
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'MM/DD/YYYY'
      });
  }
  employeeForm: any;
  validationMessages  = {
    'FullName' : {
                    'required': 'FullName is Required'
                  },
    'Email' : {
                'required': 'Email is Required'
              },
    // 'skillName' : {
    //             'required': 'Skill Name is Required'
    //           },
    // 'experienceInYears' : {
    //             'required': 'Experience In Years is Required'
    //           }
    
    }; 

  formErrors = {
    'FullName' : '',
    'Email' : '',
    // 'skillName' : '',
    // 'experienceInYears' : ''
  };

  ngOnInit() { 
    this.employeeForm = this.fb.group({
      FullName : ['',[Validators.required]],
      Email : ['',[Validators.required]],
      skills : this.fb.array([
        this.addSkillFormGroup()
      ])
    });

    // this.arout.paramMap.subscribe(e=>{
    //   this.id=this.arout.paramMap.subscribe(e=>{
    //     this.employeeForm.get('id').setValue(e.get('id'))
    //     this.iid=(e.get('id'))
        
    //   })
    // })
  }

  addSkillButtonClick(): void {
    (<FormArray>this.employeeForm.get('skills')).push(this.addSkillFormGroup());
  }

  addSkillFormGroup(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
      experienceInYears: ['', Validators.required]
    });
  }


  submmited: boolean = false;

  onSubmit(formData){
    this.submmited = true;
  
    this.logValidationMessages();
    if(this.employeeForm.valid){
      alert('ok')
      // console.log(formData);
      // this.http.post('https://digitalapp001.herokuapp.com/api/pat/addcomplain',formData).subscribe(this.cb)
    }
  }

  cb=(dt)=>{
    this.employeeForm.reset({
      Complaint : '',
      ComplaintDuration : ''
    });
  }

  logValidationMessages(group: FormGroup = this.employeeForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
        this.formErrors[key] = '';
          if (abstractControl && !abstractControl.valid && (abstractControl.touched || this.submmited)) {
            const messages = this.validationMessages[key];
            for (const errorKey in abstractControl.errors) {
              if (errorKey) {
                this.formErrors[key] += messages[errorKey] + ' ';
              }
            }
          }
          if (abstractControl instanceof FormGroup) {
            this.logValidationMessages(abstractControl);
          } 
          
          // if (abstractControl instanceof FormArray) {
          //   for (const control of abstractControl.controls) {
          //     if (control instanceof FormGroup) {
          //       this.logValidationMessages(control);
          //     }
          //   }
          // }
      });
  }


  gotoIllness(){
    this.router.navigate(['dashboard/illness',{id:this.iid}])
  }

}

