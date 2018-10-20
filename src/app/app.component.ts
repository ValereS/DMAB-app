import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dmab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dmab';

  loadComplete: boolean;

  ngOnInit() {
    this.loadComplete = false;
    setTimeout(() => {
      this.loadComplete = true;
    }, 6000);
  }

}
