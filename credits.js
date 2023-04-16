
//CODE TO INSERT VALUES INTO THE C_DATA TABLE

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sms'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  insertStudentData();
  console.log('Connected to database');
});

const studentData=[
    { "course_code": 4132, "course_name": "Data Communication", "credit": 4 },
    { "course_code": 4134, "course_name": "Operating Systems", "credit": 4 },
    { "course_code": 4133, "course_name": "Data Structures", "credit": 5 },
    {
      "course_code": 4131,
      "course_name": "Computer System Hardware",
      "credit": 4
    },
    {
      "course_code": 4139,
      "course_name": "System Administration Lab",
      "credit": 3
    },
    { "course_code": 4138, "course_name": "Data Structures Lab", "credit": 3 },
    {
      "course_code": 4137,
      "course_name": "Computer System Hardware Lab",
      "credit": 3
    },
    {
      "course_code": 4136,
      "course_name": "Application Development using Java",
      "credit": 5
    },
    {
      "course_code": 5132,
      "course_name": "Project Management & Software Engineering",
      "credit": 4
    },
    { "course_code": 5133, "course_name": "Web Programming", "credit": 4 },
    {
      "course_code": 5131,
      "course_name": "Microprocessor and Interfacing",
      "credit": 4
    },
    { "course_code": 5136, "course_name": "Information Security", "credit": 4 },
    { "course_code": 5135, "course_name": "Ethical Hacking", "credit": 4 },
    { "course_code": 5134, "course_name": "Cloud Computing", "credit": 4 },
    { "course_code": 5139, "course_name": "Web Programming Lab", "credit": 2 },
    { "course_code": 5138, "course_name": "Microprocessor Lab", "credit": 2 },
    {
      "course_code": 5009,
      "course_name": "Industrial Training/Industrial Visit/Collaborative work",
      "credit": 2
    },
    {
      "course_code": 5137,
      "course_name": "Computer Network Engineering Lab",
      "credit": 3
    },
    { "course_code": 6132, "course_name": "Microcontrollers", "credit": 5 },
    { "course_code": 6131, "course_name": "Computer Networks", "credit": 4 },
    {
      "course_code": 6133,
      "course_name": "Smart Device Programming",
      "credit": 5
    },
    { "course_code": 6134, "course_name": "Mobile Communication", "credit": 5 },
    {
      "course_code": 6135,
      "course_name": "Network Infrastructure Mangagement",
      "credit": 5
    },
    { "course_code": 6136, "course_name": "Software Testing", "credit": 5 },
    { "course_code": 6139, "course_name": "Microcontroller Lab", "credit": 3 },
    {
      "course_code": 6138,
      "course_name": "Smart Device Programming Lab",
      "credit": 3
    },
    { "course_code": 6009, "course_name": "Project & Seminar", "credit": 10 }
  ]


const insertStudentData = () => {


    studentData.map((student) => {
        const { course_code,course_name,credit} = student;
   
        const query = `INSERT INTO c_data (course_code,course_name,credit) VALUES (${course_code}, '${course_name}', ${credit})`;
        connection.query(query, (err, results, fields) => {
          if (err) {
            console.error('Error inserting data: ', err);
            return;
          }
          console.log('Data inserted successfully');
        });


  });
}