import { Component, OnInit, ViewChild } from '@angular/core';

export interface IStudent {
  firstName: string;
  lastName: string;
  superheroName: string;
  email: string;
  gender: string;
  age: number;
  selected: boolean;
}
const StudentData: IStudent[] = [
  { firstName: 'Manisha', lastName: 'Singh', superheroName: 'Avengers', email: 'manisha@gmial.com', gender: 'F', age: 26, selected: false },
  { firstName: 'Shashank', lastName: 'Sharma', superheroName: 'SpiderMan', email: 'shshank@gmial.com', gender: 'M', age: 27, selected: false },

]

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  display = 'none';
  allStudents = StudentData;
  newStudent: IStudent;
  selectedAll: boolean;

  constructor() {
    this.newStudent = { firstName: '', lastName: '', superheroName: '', email: '', gender: '', age: null, selected: false }
  }

  ngOnInit() { }

  createNewRecord() {
    this.display = 'block';
  }

  closeModel() {
    this.display = 'none';
  }

  deleteSelected() {
    var i = this.allStudents.length
    while (i--) {
        if (this.allStudents[i].selected === true) { 
          this.allStudents.splice(i, 1);
        } 
    }
  }
  addRecord() {
    this.allStudents.push(this.newStudent);
    this.closeModel();

  }

  selectAll() {
    for (var i = 0; i < this.allStudents.length; i++) {
      this.allStudents[i].selected = this.selectedAll;
    }
  }

  onCancel() {
    this.display = 'none';
    this.newStudent = { firstName: '', lastName: '', superheroName: '', email: '', gender: '', age: null, selected: false }
  }

  checkIfAllSelected() {
    this.selectedAll = this.allStudents.every(function (item: any) {
      return item.selected == true;
    })
  }

}

