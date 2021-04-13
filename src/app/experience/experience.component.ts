import { ExperienceService } from './../experience.service';
import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService.getExperiences().subscribe((data: Experience[]) => {
      this.experiences = data;
    });
  }

}
