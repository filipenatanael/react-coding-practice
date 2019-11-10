import React from 'react';

interface Student {
  name: String;
  email: {
    primary: String,
    segundary: String 
  };
  age: Number;
}

interface Course {
  name: String;
}

interface Props {
    student: Student;
    course: Course;
}
//const TextField: React.FC<Props> = (props) => {
const University: React.FC<Props> = ({ student, course }) => {
  return (
    <div>
        <h1>University...</h1>
    </div>
  );
}

export default University;
