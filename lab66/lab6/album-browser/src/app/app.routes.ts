import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { AlbumsComponent } from './components/albums/albums';
import { AlbumDetail } from './components/album-detail/album-detail';
import { AlbumPhotos } from './components/album-photos/album-photos';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },

  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id/photos', component: AlbumPhotos },
{ path: 'albums/:id', component: AlbumDetail },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];