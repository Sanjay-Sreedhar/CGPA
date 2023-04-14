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

const studentData = [
  {
    "registerNumber": 20133048,
    "studentName": "VIVEK T K",
    "branch": "Computer Engineering",
    "semester": 3,
    "courses": [
      {
        "course": "3131-Computer Architecture",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 44,
        "grade": "A",
        "result": "P"
      },
      {
        "course": "3001-Environmental Science & Disaster Management",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 34,
        "grade": "B",
        "result": "P"
      },
      {
        "course": "3139-Database Management System Lab",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 42,
        "grade": "A",
        "result": "P"
      },
      {
        "course": "3138-Digital Computer Principles Lab",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 40,
        "grade": "A",
        "result": "P"
      },
      {
        "course": "3137-Objected Oriented Programming Lab",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 46,
        "grade": "A",
        "result": "P"
      },
      {
        "course": "3134-Objected Oriented Programming through C++",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 41,
        "grade": "A",
        "result": "P"
      },
      {
        "course": "3133-Digital Computer Principles",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 44,
        "grade": "S",
        "result": "P"
      },
      {
        "course": "3132-Database Management System",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 42,
        "grade": "S",
        "result": "P"
      }
    ]
  },
  {
    "registerNumber": 20133047,
    "studentName": "RHISHIKESH N S",
    "branch": "Computer Engineering",
    "semester": 3,
    "courses": [
      {
        "course": "3139-Database Management System Lab",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 24,
        "grade": "E",
        "result": "P"
      },
      {
        "course": "3138-Digital Computer Principles Lab",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 20,
        "grade": "E",
        "result": "P"
      },
      {
        "course": "3137-Objected Oriented Programming Lab",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 26,
        "grade": "D",
        "result": "P"
      },
      {
        "course": "3134-Objected Oriented Programming through C++",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 20,
        "grade": "F",
        "result": "F"
      },
      {
        "course": "3133-Digital Computer Principles",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 20,
        "grade": "F",
        "result": "F"
      },
      {
        "course": "3132-Database Management System",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 20,
        "grade": "F",
        "result": "F"
      },
      {
        "course": "3131-Computer Architecture",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 20,
        "grade": "F",
        "result": "F"
      },
      {
        "course": "3001-Environmental Science & Disaster Management",
        "examType": "Regular",
        "attendance": "Present",
        "internalMark": 20,
        "grade": "C",
        "result": "P"
      }
    ]
  }
]

const insertStudentData = () => {
  studentData.map((student) => {
    const { registerNumber, studentName, semester, courses } = student;
    let sgpa=0;
    for (const hello of courses) {

      const { course, examType, attendance, internalMark, grade, result } = hello;
      const parts = course.split("-");
      const course_code = parts[0];
      const course_name = parts[1];
      console.log();
      // const query = `INSERT INTO s_data (register_number, student_name, semester, course_code,exam_type,attendence,imark, grade, result) VALUES (${registerNumber}, '${studentName}', ${semester}, '${course_code}','${examType}','${attendance}',  ${internalMark}, '${grade}', '${result}')`;
      //   connection.query(query, (err, results, fields) => {
      //     if (err) {
      //       console.error('Error inserting data: ', err);
      //       return;
      //     }
      //     console.log('Data inserted successfully');
      //   });

      connection.query(`select credit from c_data where course_code='${course_code}'`, (err, result) => {

        let credit = result[0].credit;
        // console.log(credit);

        let totalGradePoints = 0;
        let totalCredits = 0;


        let gradePoint = 0;

        switch (grade) {
          case 'S':
            gradePoint = 10;
            break;
          case 'A':
            gradePoint = 9;
            break;
          case 'B':
            gradePoint = 8;
            break;
          case 'C':
            gradePoint = 7;
            break;
          case 'D':
            gradePoint = 6;
            break;
          case 'E':
            gradePoint = 5;
            break;

        }
        console.log(grade);
        // console.log(`gradepoint:${gradePoint}`);
        // console.log(`credit:${credit}`);

        // totalGradePoints += gradePoint * credit;
        // console.log(totalGradePoints);
        // totalCredits += credit;

        sgpa=calc(totalGradePoints,totalCredits);
        


      })

    }

    function calc(totalGradePoints,totalCredits) {
      return totalGradePoints/totalCredits;
    }
    
        console.log(`SGPA: ${sgpa}`);
  })

  // const { registerNumber, studentName, semester, courses } = studentData;
  // courses.forEach(({ courses,  internalMark, grade, result }) => {
  //   const query = `INSERT INTO s_data (register_number, student_name, semester, course_code,   imark, grade, result) VALUES (${registerNumber}, '${studentName}', ${semester}, '${courses}',  ${internalMark}, '${grade}', '${result}')`;
  //   connection.query(query, (err, results, fields) => {
  //     if (err) {
  //       console.error('Error inserting data: ', err);
  //       return;
  //     }
  //     console.log('Data inserted successfully');
  //   });
  // });
};

app.listen(8000, () => {
  console.log("running in 8000");
});
