import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <pre>{{books | async | json}}</pre>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  #client = inject(HttpClient);
  books = this.#client.get('/api/books');
  title = 'frontend';
}
