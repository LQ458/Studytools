"use client"
import React, { useState } from 'react';

export default function Intro () {
  const [subjects, setSubjects] = useState(Array(8).fill(''));
  const [grades, setGrades] = useState(Array(8).fill(''));

  const handleSubjectChange = (index, value) => {
    const newSubjects = [...subjects];
    newSubjects[index] = value;
    setSubjects(newSubjects);
  };

  const handleGradeChange = (index, value) => {
    const newGrades = [...grades];
    newGrades[index] = value;
    setGrades(newGrades);
  };

  const calculateGPA = () => {
    var length = 0;
    var total = 0;
    grades.map((grade) => {
      if(grade !== '') {
        length++;
        total += grade;
      }
    })
    console.log(total);
    console.log(length);
    return (total / length).toFixed(2);
  };

  return (
    <>
      <h1 className='title'>GPA Calculator</h1>
      {subjects.map((subject, i) => (
        <div key={i}>
          <input value={subject} onChange={(e) => handleSubjectChange(i, e.target.value)}/>
          <select value={grades[i]} onChange={(e) => handleGradeChange(i, Number(e.target.value))}>
  <option value="">Select grade</option>
  <option value={4}>A</option>
  <option value={3.7}>A-</option>
  <option value={3.3}>B+</option>
  <option value={3}>B</option>
  <option value={2.7}>B-</option>
  <option value={2.3}>C+</option>
  <option value={2}>C</option>
  <option value={1.7}>C-</option>
  <option value={1.3}>D+</option>
  <option value={1}>D</option>
  <option value={0.7}>D-</option>
  <option value={0}>F</option>
</select>
        </div>
      ))}
      <button onClick={() => alert(`Your GPA is ${calculateGPA()}`)}>Calculate GPA</button>
    </>
  )
}