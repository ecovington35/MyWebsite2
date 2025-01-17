import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
{
  path: 'blog',
  component: BlogComponent
},
{
  path: 'gallery',
  component: GalleryComponent
},
{
  path: 'profile',
  component: ProfileComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
