import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/dataService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dmab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public ds: DataService;
  public router: Router;

  constructor(
    dataService: DataService,
    router: Router
  ) {
    this.ds = dataService;
    this.router = router;
  }

  ngOnInit() {
    if (this.ds.$user == null || this.ds.$user.nickname !== '') {
      this.router.navigate(['login']);
    }
  }

}
