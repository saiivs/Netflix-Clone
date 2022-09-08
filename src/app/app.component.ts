import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {Movies} from './models/movies'

import{Subscription} from 'rxjs'
import { MovieServsService } from './services/movie-servs.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  sticky:boolean=false;
  title:string="TRENDING"
subs:Subscription[]=[];
trending:Movies|any;
popular:Movies|undefined;
topRated:Movies|undefined;
orginals:Movies|undefined;
nowPlaying:Movies|any;
latest:Movies|undefined;

sliderConfig = {
  slidesToShow:9,
  slidesToScroll:2,
  arrows:true,
  autoplay:false
}

@ViewChild('stickHeader') header: ElementRef|undefined
headerBGUrl:string|undefined;

constructor(private movie: MovieServsService){}

ngOnDestroy():void{
  this.subs.map(s=>s.unsubscribe());
}

ngOnInit(): void {
  this.subs.push(this.movie.getTrendingMovies().subscribe({next:data=>
    {this.trending=data;this.headerBGUrl='https://image.tmdb.org/t/p/original'+this.trending.results[1].backdrop_path}
 }))
  this.subs.push(this.movie.getLatestMovies().subscribe({next:data=>this.latest=data}))
  this.subs.push(this.movie.getNowPlaying().subscribe({next:data=>this.nowPlaying=data}))
  this.subs.push(this.movie.getOrginalsMovies().subscribe({next:data=>this.orginals=data}))
  this.subs.push(this.movie.getPopularMovies().subscribe({next:data=>this.popular=data}))
  this.subs.push(this.movie.getTopRated().subscribe({next:data=>this.topRated=data}))
  
}

@HostListener('window:scroll',['$event'])
  
handleScroll(){
  const windowScroll = window.pageYOffset;

  if(windowScroll>=this.header?.nativeElement.offsetHeight){
    this.sticky=true;
  }else{
    this.sticky=false;
  }
}

}


