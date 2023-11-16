import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serves us as a root component

  username: string = '';
  showDetails: boolean = false;
  numberOfClicks: number[] = [];
  backgroundColor = 'transparent'
  color = 'black'

  onUsername() {
    this.username = ''
  }

  onDisplay() {
    this.showDetails = !this.showDetails;
    this.numberOfClicks.push(this.numberOfClicks.length + 1)
  }

}
