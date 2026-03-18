import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private client: HttpClient) {}

  // Получить все альбомы
  getAlbums(): Observable<Album[]> {
  return this.client.get<Album[]>(this.BASE_URL);
}
  // Получить один альбом по ID
  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/${id}`);
  }

  // Получить фотографии альбома
  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.BASE_URL}/${id}/photos`);
  }

  // Обновить название (имитация)
  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/${album.id}`, album);
  }

  // Удалить альбом (имитация)
  deleteAlbum(id: number): Observable<void> {
  return this.client.delete<void>(`${this.BASE_URL}/${id}`);
}
}