import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Students } from './students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Students[] = [];
  studName: any;
  p: number = 1;
  key: string = 'id';
  reverse: boolean = false;

  constructor(public studService: StudentService) { }

  ngOnInit(): void {
    this.studService.getStudents().subscribe((res) => {
      this.students = res;
      console.log(res)
    })
  }

  search() {
    if(this.studName == "") {
      this.ngOnInit();
    } else {
      this.students = this.students.filter(res => {
        return res.studName.toLocaleLowerCase().match(this.studName.toLocaleLowerCase())
      })
    }
  }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
