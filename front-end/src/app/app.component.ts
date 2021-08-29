import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {ITabLink} from "@interfaces/tab-link";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks: ITabLink[] = [];
  activeLink!: ITabLink;

  constructor(
    private router: Router,
  ) {
    this.navLinks = router.config
      .filter(routeParam => routeParam?.data?.isTab && routeParam.path && !routeParam.path.includes('*'))
      .map(routeParam => ({
        path: routeParam.path as string,
        label: routeParam?.data?.label,
      }));
    const subscription$ = router.events.pipe(
      tap(event => {
        if (event instanceof NavigationEnd) {
          this.activeLink = this.navLinks.find(navLink => ('/' + navLink.path) === event.urlAfterRedirects) as ITabLink;
          subscription$.unsubscribe();
        }
      })
    ).subscribe();
  }
}
