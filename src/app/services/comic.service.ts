import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comic } from '../interfaces/comics';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  publicKey = '71b67d34099f02bf93299f3ab492a3e5'
  privateKey = 'd3037cfb73239d397f9be0df6921b3d4d3b42c50'
  baseUrl = 'http://gateway.marvel.com/v1/public/comics'

  constructor(private httpClient: HttpClient) { }

  getComicList(): Observable<any> {
    let ts = Date.now();
    let md5 = new Md5();
    let md5Hash = md5.appendStr(ts + this.privateKey + this.publicKey);
    let finalUrl = `${this.baseUrl}?ts=${ts}&apikey=${this.publicKey}&hash=${md5Hash.end()}`;

    console.log("Final Url->", finalUrl);
    return this.httpClient.get(finalUrl);
  }
}
