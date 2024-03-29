import { Component, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@chirper/auth';

@Component({
  selector: 'lib-sidebar',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  template: `<ng-container *ngIf="!isLoggedIn()">
      <lib-login></lib-login>
    </ng-container>
    <ng-container *ngIf="isLoggedIn()">
      <input
        type="text"
        class="w-full rounded-lg p-2 text-xs h-8 border-sky-300 border bg-sky-100"
        placeholder="Search..."
      />
    </ng-container>`,
})
export class SidebarComponent {
  @Input({ required: true })
  isLoggedIn!: Signal<boolean>;
}
