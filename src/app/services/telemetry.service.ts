import { Injectable, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TelemetryService implements OnDestroy {
  private BACKEND_URL = 'http://localhost:8000';
  private STORAGE_KEY = 'telemetry_tracker';
  private DEBUG = true;
  private trackerId: string;

  private completionRoutes: string[] = [
    "/completion", "/success", "/final-page", "/thank-you", "/screen5",
    "/account-opening/personal-account/review-and-submit", "/self-service/reciept",
  ];

  constructor(private router: Router) {
    this.trackerId = this.initializeTrackerId();
    this.initializeTracking();
  }

 
  private log(message: string): void {
    if (this.DEBUG) {
      console.log(`[Telemetry Tracker] ${message}`);
    }
  }

  
  private generateTrackerId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }


  private initializeTrackerId(): string {
    let trackerId = localStorage.getItem(this.STORAGE_KEY);
    if (!trackerId) {
      trackerId = this.generateTrackerId();
      localStorage.setItem(this.STORAGE_KEY, trackerId);
    }
    return trackerId;
  }

  
  private startSession(branch: string, service: string): void {
    try {
      fetch(`${this.BACKEND_URL}/start-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tracker_id: this.trackerId, branch, service }),
      }).catch(error => this.log(`Session start error: ${error}`));
    } catch (error) {
      this.log(`Session start failed: ${error}`);
    }
  }


  public trackPageView(path: string): void { 
    try {
      fetch(`${this.BACKEND_URL}/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tracker_id: this.trackerId, step_name: path, isComplete: false }),
      }).catch(error => this.log(`Page track error: ${error}`));
    } catch (error) {
      this.log(`Page tracking failed: ${error}`);
    }
  }

  
  public markProcessComplete(): void {  
    try {
      fetch(`${this.BACKEND_URL}/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tracker_id: this.trackerId, step_name: window.location.pathname, isComplete: true }),
      }).catch(error => this.log(`Completion track error: ${error}`));
    } catch (error) {
      this.log(`Process completion tracking failed: ${error}`);
    }
  }

  
  public checkCompletion(route: string): void {
    if (this.completionRoutes.some(completionRoute => route.includes(completionRoute))) {
      this.markProcessComplete();
    }
  }

  
  private initializeTracking(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const initialBranch = urlParams.get('branch') || 'unknown';
    const initialService = urlParams.get('service') || 'unknown';
    this.startSession(initialBranch, initialService);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
     
        this.trackPageView(event.url);  
      }
    });
  }

 
  ngOnDestroy(): void {
    localStorage.removeItem('tracker_id');
  }
}
