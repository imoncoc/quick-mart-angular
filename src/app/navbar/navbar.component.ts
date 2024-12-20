import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isNavLinkOpen: boolean = false; // Use a descriptive variable name

  toggleNavLink() {
    this.isNavLinkOpen = !this.isNavLinkOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}
