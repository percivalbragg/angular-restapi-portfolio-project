import { Component, OnInit } from '@angular/core';
import {EducationData} from '../../data/EducationData';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  courses: any;

  constructor() {this.courses = EducationData;}

  ngOnInit(): void {
  }

}
