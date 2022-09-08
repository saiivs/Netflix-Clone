import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';


import {Movies} from '../models/movies'

const enum endpoint{
  latest = '/movie/latest',
  now_playing='/movie/now_playing',
  popular='/movie/popular',
  top_rated='/movie/top_rated',
  upcoming='/movie/upcoming',
  trending='/trending/all/week',
  orginals='/discover/tv'
}


@Injectable({
  providedIn: 'root'
})
export class MovieServsService {


  private URL='https://api.themoviedb.org/3/discover/tv'
  private api_key= environment.api

  constructor(private http: HttpClient) { }

  //  httpOptions={
  //   headers : new HttpHeaders({
  //     'content-type': 'application/json',
  //     'api_key':'95f6314b1d465c86c73fd31b1a2358b3'
  //   })
  // }

  getLatestMovies():Observable<Movies>{
    return this.http.get<Movies>(`https://api.themoviedb.org/3/movie/latest?api_key=${this.api_key}`)
  }

  getNowPlaying():Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.api_key}`)
  }

  getOrginalsMovies():Observable<Movies>{
    return this.http.get<Movies>(`https://api.themoviedb.org/3/discover/tv?api_key=${this.api_key}`)
  }

  getPopularMovies():Observable<Movies>{
    return this.http.get<Movies>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}`)
  }

  getTopRated():Observable<Movies>{
    return this.http.get<Movies>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.api_key}`)
  }

  getUpcomingMovies():Observable<Movies>{
    return this.http.get<Movies>(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.api_key}`)
  }

  getTrendingMovies():Observable<Movies>{
    return this.http.get<Movies>(`https://api.themoviedb.org/3/trending/all/week?api_key=${this.api_key}`)
  }
}
