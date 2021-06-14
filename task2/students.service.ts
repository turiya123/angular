import { StudentDetails } from './student-details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor() { }
  imageRootPath:string = 'assets/download.png';

  // include code to hit springboot endpoints {}
  getAllStudents(): StudentDetails[]
  {
    let student1 : StudentDetails = {
        studentName : 'john',
        StudentId : 1,
        Grade:7,
        Section:'A',
        Email:'john@gmail.com',
        ParentMobileNumber:"6574826789",
        imageName:'assets/download.png'
    }
    let student2 : StudentDetails = {
        studentName : 'daisy',
        StudentId : 2,
        Grade:7,
        Section:'B',
        Email:'daisy@gmail.com',
        ParentMobileNumber:"6574726789",
        imageName:'assets/download.png'
        


    }
    let student3 : StudentDetails = {
        studentName : 'Eleven',
        StudentId : 1,
        Grade:8,
        Section:'A',
        Email:'eleven@gmail.com',
        ParentMobileNumber:"6826789",
        imageName:'assets/download.png'



    }

    
    return [student1,student2,student3];
  }//end of getAll Products from Server

}//end of service class