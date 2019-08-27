import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Medz';
  data={
value:"Type your name"
  }
  onKeyUp(newTitle:string){
this.data.value=newTitle;

  }
 

} 
