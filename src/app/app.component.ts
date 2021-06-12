import { Component } from '@angular/core';

declare function openNav(): any;
declare function closeNav(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appbar';
  share(): void {
    window.alert('Github link : http://github.com/malikromir');
  }
  openSideBar(): void {
    openNav();
  }
  closeSideBar(): void {
    closeNav();
  }
}
