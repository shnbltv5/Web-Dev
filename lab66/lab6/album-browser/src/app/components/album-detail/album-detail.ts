import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-album-detail',
  standalone: true,
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css'],
  imports: [CommonModule, RouterLink, FormsModule]
})
export class AlbumDetail implements OnInit {

  album?: Album;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router,
    private location: Location
  ) {}
  

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe((data: Album) => {
      this.album = data;
    });
  }
  save() {
  if (!this.album) return;

  this.albumService.updateAlbum(this.album).subscribe(() => {
    alert('Saved!');
  });
}

goBack() {
  this.location.back();
}

}