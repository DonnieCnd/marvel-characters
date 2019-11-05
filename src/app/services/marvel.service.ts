import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private baseUrl: string = 'http://gateway.marvel.com/v1/public/';
  private publicKey: string = 'a49b8eb275db89bd76fdef2eddf33ee7';
  private privateKey: string = '41f4f2fddc9c92dfdee30db26343b475417454e7';
  private timeStamp = +new Date();
  private hash: string;
  private credentials: string;


  constructor(private httpClient: HttpClient, private Md5: Md5) { 
    this.generateCredentials();
  }

  generateCredentials(){
    this.hash = String(Md5.hashStr(`${this.timeStamp}${this.privateKey}${this.publicKey}`));
    this.credentials = `?ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.hash}`;
  }

  getCharacters(endpoint: string): Observable<any>{
    let apiUrl = `${this.baseUrl}${endpoint}${this.credentials}`
    return this.httpClient.get(apiUrl).pipe(map(res => res))
  }

  getOneCharacter(endpoint: string, name: string): Observable<any>{
    let apiUrl = `${this.baseUrl}${endpoint}${this.credentials}&nameStartsWith=${name}`
    return this.httpClient.get(apiUrl).pipe(map(res => res))
  }

  getOneCharacterById(endpoint: string, id: number): Observable<any>{
    let apiUrl = `${this.baseUrl}${endpoint}${id}${this.credentials}`
    return this.httpClient.get(apiUrl).pipe(map(res => res))
  }
 
}
