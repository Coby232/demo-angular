import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationEnd } from '@angular/router';
import { TelemetryService } from './services/telemetry.service'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],  
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'demo-angular';

  constructor(private telemetryService: TelemetryService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.telemetryService.trackPageView(event.url);  
        this.telemetryService.checkCompletion(event.url);  
      }
    });

    
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
        
    //   }
    // });
  }

  ngOnDestroy(): void {
    this.telemetryService.ngOnDestroy();
  }
}
