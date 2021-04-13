import { Component, OnInit } from '@angular/core';
import {CertificationData} from '../../data/CertificationData';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  certifications:any;

  constructor() {this.certifications = CertificationData;}

  ngOnInit(): void {
  }

}
