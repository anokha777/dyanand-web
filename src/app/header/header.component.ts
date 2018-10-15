import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMainmenuExpanded = false;
  constructor() { }

  ngOnInit() {
  }

  expandFunction() {
    this.isMainmenuExpanded = !this.isMainmenuExpanded;
    const shand = document.getElementsByClassName('menuzord-menu') as HTMLCollectionOf<HTMLElement>;
    if (this.isMainmenuExpanded) {
      shand[0].style.display = 'block';
    } else {
      shand[0].style.display = 'none';
    }
  }

}
