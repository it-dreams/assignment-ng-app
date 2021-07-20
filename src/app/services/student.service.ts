import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../components/pages/students/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url: string  = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get<Students[]>(this.url);
  }
}
