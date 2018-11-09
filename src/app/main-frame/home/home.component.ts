import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/dto/user';
import { DataService } from '../../core/dataService/data.service';

@Component({
  selector: 'dmab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  public user: User;

  constructor(
    public dataService: DataService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.dataService.$user != null) {
      this.router.navigate(['login']);
    }
  }

}
