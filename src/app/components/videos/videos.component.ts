import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videoUrl = 'https://www.youtube.com/embed/2JeKfQ2r2r8';
  safeURL;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

}
