import { Component, OnInit } from '@angular/core';
import {PatientService} from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patienttable',
  templateUrl: './patienttable.component.html',
  styleUrls: ['./patienttable.component.css']
})
export class PatienttableComponent implements OnInit {
  searchTerm
  Patient: any;
  loading: boolean;

  constructor(private patientService : PatientService, private router :Router) { }

  ngOnInit() {
    this.loading = true;
    this.patientService.getAllPatients().subscribe(res =>{
      this.Patient = res;
      this.loading = false;
    });
  }

  goToChiefComplainComponent(id){
    this.router.navigate(['dashboard/complain',id])
  }

}
