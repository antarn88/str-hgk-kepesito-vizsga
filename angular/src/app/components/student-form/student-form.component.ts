import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentHttpService } from 'src/app/service/student-http.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  reactForm: FormGroup;

  student: Student;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private studentService: StudentHttpService
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.activatedRoute.snapshot.params.id;
    const student = await this.studentService.getById(id).toPromise();
    this.student = student;
  }

  async saveStudent(form: NgForm){
    const student = form.value;
    try {
      await this.studentService.update(student, this.student._id).toPromise();
      this.location.back();
    } catch (err) {
      console.error(err);
    }
  }

}
