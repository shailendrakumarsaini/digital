import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    // this.toggleSideBar();
  }

  goToFirstComponent(){
    if(this.router.url == 'dashboard'){
      this.router.navigate(['../dashboard/first']);
    }else{
      this.router.navigate(['../../dashboard/first']);
    }
  }

  goToSecondComponent(){
    if(this.router.url == 'dashboard'){
      this.router.navigate(['../dashboard/second']);
    }else{
      this.router.navigate(['../../dashboard/second']);
    }
  }

  goToForm5Component(){
    if(this.router.url == 'dashboard'){
      this.router.navigate(['../dashboard/form5']);
    }else{
      this.router.navigate(['../../dashboard/form5']);
    }
  }

  goToPatientTableComponent(){
    if(this.router.url == 'dashboard'){
      this.router.navigate(['../dashboard/patienttable']);
    }else{
      this.router.navigate(['../../dashboard/patienttable']);
    }
  }

  goToAccordionComponent(){
    if(this.router.url == 'dashboard'){
      this.router.navigate(['../dashboard/accordion']);
    }else{
      this.router.navigate(['../../dashboard/accordion']);
    }
  }

  toggleSideBar(){
    let element = document.getElementById("accordionSidebar");
    element.classList.toggle("toggled");
  }

}
