import {Component} from '@angular/core';
import {Router} from "@angular/router";

interface ILink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks: ILink[] = [
    {path: 'AdGrid_demo', label: 'AgGrid'},
    {path: 'Highcharts_demo', label: 'Highcharts'},
    {path: 'ThreeJS_demo', label: 'ThreeJS'},
  ];
  activeLink: ILink = this.navLinks[2];

  constructor(
    private router: Router
  ) {
    this.router.navigate([this.activeLink.path]).then();
  }
}
