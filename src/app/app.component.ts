import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { GunRef } from './gun-angular/gun-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private db: GunRef) { }
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
