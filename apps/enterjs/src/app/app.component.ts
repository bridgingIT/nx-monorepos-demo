import {Component, inject, Signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {AuthState, isLoggedInSelector} from '@chirper/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'enterjs';
  isLoggedIn: Signal<boolean> = inject(Store<AuthState>).selectSignal(isLoggedInSelector);
}
