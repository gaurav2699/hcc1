import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meds',
  templateUrl: './meds.component.html',
  styleUrls: ['./meds.component.css']
})
export class MedsComponent implements OnInit {
  title: string='medz';
  constructor() { }

  ngOnInit() {
  }

}
