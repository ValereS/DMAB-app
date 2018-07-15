import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dmab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public routes: Map<String, String>;

  constructor() { }

  ngOnInit() {
    this.routes = new Map<String, String>([
      [ 'home', 'Home' ],
      [ 'login', 'Login' ]
    ]);
  }

}
