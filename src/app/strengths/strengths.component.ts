import { Component, OnInit } from '@angular/core';
import {MajorStrengthsData} from '../../data/MajorStrengthsData';

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.css']
})
export class StrengthsComponent implements OnInit {

  strengths: any;

  constructor() { this.strengths = MajorStrengthsData; }

  ngOnInit(): void {
  }

}
