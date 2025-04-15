import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesWebComponent } from './services-web/services-web.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserDetailsComponent } from './services-web/users/user-details/user-details.component';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './services-web/users/users.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'services-web',
    component: ServicesWebComponent,
  },
  { path: 'details', component: UserDetailsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: ErrorComponent },
];
