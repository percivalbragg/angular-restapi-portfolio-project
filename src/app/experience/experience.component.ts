import { Component, OnInit } from '@angular/core';
import {ExperienceData} from '../../data/ExperienceData';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: any;

  constructor() { this.experiences = ExperienceData; }

  ngOnInit(): void {
  }

}
