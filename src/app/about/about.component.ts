import { Component, OnInit } from '@angular/core';
import { AboutData } from '../../data/AboutData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public about = AboutData;

  constructor() { }

  ngOnInit(): void {
  }

}
