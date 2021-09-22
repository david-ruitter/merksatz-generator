import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'merksatz-generator';
  keywords: string[] = [];

  addKeyword(k: string): void {
    this.keywords.push(k);
  }

  deleteKeyword(i: number): void {
    this.keywords.splice(i, 1);
  }
}
