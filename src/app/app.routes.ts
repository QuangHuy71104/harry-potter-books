import { Routes } from '@angular/router';
import {ViewDetailComponent} from './pages/view-detail/view-detail.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'detail/:id',
    component: ViewDetailComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
];
