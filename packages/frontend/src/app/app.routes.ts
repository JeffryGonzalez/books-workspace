import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { BookListComponent } from './pages/book-list.component';
import { BookEntryComponent } from './pages/book-entry.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'add-book',
    component: BookEntryComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
