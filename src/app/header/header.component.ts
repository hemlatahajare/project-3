import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

x:any
  constructor() { }

  ngOnInit(): void {
  
 
  }
  isMobileNavOpen = false;

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }
  display = false;
  toggle()
  {
    this.display = !this.display;
  }
  displayy = false;
  deepToggle()
  {
    this.displayy = !this.displayy;
  }
  
  
}
