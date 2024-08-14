import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex gap-4 m-8">
      <a
        class="btn btn-primary"
        [routerLinkActive]="['btn-accent']"
        routerLink="/home"
        >Home</a
      >
      <a
        class="btn btn-primary"
        [routerLinkActive]="['btn-accent']"
        routerLink="/books"
        >Book List</a
      >
      <a
        class="btn btn-primary"
        [routerLinkActive]="['btn-accent']"
        routerLink="/add-book"
        >Add Book</a
      >
    </div>
    <main class="container mx-auto pt-12">
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class AppComponent {}
