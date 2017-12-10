import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { GunRef } from '../../gun-rx/gun-ref';
import { GunAngularService } from '../../gun-rx/gun-angular/gun-angular.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private db: GunRef;
  constructor(
    private gunService: GunAngularService
  ) {
    this.db = gunService.db;
    this.db.opt({ peers: [location.origin + '/gun'] });
  }
  ngOnInit() {

    this.db.get('test')
      .on().subscribe(data => {
        console.log('on() received: ', data);
      });
    this.db.get('test')
      .val().subscribe(data => {
        console.log('val() received: ', data);
      });
    this.db.get('test')
      .put({
        timestamp: new Date().getTime()
      });
  }
}
