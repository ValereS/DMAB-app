import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/dataService/data.service';

@Component({
  selector: 'dmab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public routes: Map<String, String>;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.routes = new Map<String, String>([
      [ 'home', 'Home' ],
      [ 'login', 'Login' ],
      [ 'adherent', 'Adherent' ]
    ]);
  }

}
