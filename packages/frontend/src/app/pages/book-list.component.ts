import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  template: ` <div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
    @for(book of books(); track book.id) {
      <tr class="bg-base-200">
        <th>{{book.title}}</th>
        <td>{{book.author}}</td>
        <td>{{book.year}}</td>
      </tr>
    }
@empty { 
      <tr>
        <td colspan="4">No books found</td>
      </tr>

}
    </tbody>
  </table>
</div> `,
  styles: ``,
})
export class BookListComponent {

  #client = inject(HttpClient);

  books = toSignal(this.#client.get<{ books: { id: string, title: string; author: string, year: number }[] }>('/api/books').pipe(map(r => r.books)));
}
