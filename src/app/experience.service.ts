import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from './experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private baseUrl = "http://localhost:8090/api/"

  constructor(private http: HttpClient) { }

  getExperiences():Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.baseUrl}experiences`);
  }
}
