import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  private counter: number = 0;

  constructor(private breakpointObserver: BreakpointObserver, private rt: Router) {
  }

  clickCount(): void{
    if (this.counter < 11){
      this.counter++;
    }else {
      console.log(this.counter);
      this.counter = 0;
      this.rt.navigate(['easteregg'])

    }
  }


}
