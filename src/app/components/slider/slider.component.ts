import { Component, OnInit, Input } from '@angular/core';
import {Movies} from '../../models/movies'


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
@Input() title:string|undefined
@Input() movies:any;
@Input() sliderConfig:any;

  ngOnInit(): void {
  }

}
