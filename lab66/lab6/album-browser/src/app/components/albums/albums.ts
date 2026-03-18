import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
// export class AlbumsComponent implements OnInit {

//   albums: Album[] = [];

//   constructor(private albumService: AlbumService) {}

//   ngOnInit(): void {
//     console.log("component started");

//     this.albumService.getAlbums().subscribe({
//       next: (data) => {
//         console.log("DATA FROM API:", data);
//         this.albums = data;
//       },
//       error: (err) => {
//         console.error("ERROR:", err);
//       }
//     });
//   }
// }


export class AlbumsComponent implements OnInit {
  albums: Album[] = []; // Изначально пустой массив

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    // Вызываем метод сервиса и ПОДПИСЫВАЕМСЯ на него
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data; // Данные придут сюда
        this.loading = false;
      },
      error: (err) => {
        console.error('Ошибка при загрузке альбомов:', err);
      }
    });
  }

  addAlbum() {
  const newAlbum = {
    userId: 1,
    id: Math.max(...this.albums.map(a => a.id)) + 1,
    title: this.newTitle
  };

  this.albums.push(newAlbum);
}

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
  loading = true;
  newTitle: string = '';
  searchText: string = '';

}