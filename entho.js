const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

// const students = require("./students.js");

const app = express();
const port = 8000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sms",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: ", err);
    return;
  }

  console.log("Connected to database");
});

app.use(bodyParser.json());
app.use(cors());

const students=
[
    {
        "registerNumber": 20130591,
        "studentName": "SANJAY SREEDHAR P",
        "branch": "Computer Engineering",
        "semester": 1,
        "courses": [
           {
              "course": "1001-English for Communication I",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 44,
              "grade": "A",
              "result": "P"
           },
           {
              "course": "1002-Engineering Mathematics I",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 46,
              "grade": "B",
              "result": "P"
           },
           {
              "course": "1003-Engineering Physics I",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 49,
              "grade": "S",
              "result": "P"
           },
           {
              "course": "1004-Engineering Chemistry I",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 50,
              "grade": "S",
              "result": "P"
           },
           {
              "course": "1008-Computing Fundamentals",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 49,
              "grade": "S",
              "result": "P"
           },
           {
              "course": "1009-Health & Physical Education",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 29,
              "grade": "C",
              "result": "P"
           }
        ]
     },
     {
        "registerNumber": 20130591,
        "studentName": "SANJAY SREEDHAR P",
        "branch": "Computer Engineering",
        "semester": 2,
        "courses": [
           {
              "course": "2001-English for Communication II",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 43,
              "grade": "A",
              "result": "P"
           },
           {
              "course": "2002-Engineering Mathematics II",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 50,
              "grade": "A",
              "result": "P"
           },
           {
              "course": "2003-Engineering Physics II",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 43,
              "grade": "C",
              "result": "P"
           },
           {
              "course": "2004-Engineering Chemistry II",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 44,
              "grade": "A",
              "result": "P"
           },
           {
              "course": "2005-Engineering Graphics",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 48,
              "grade": "C",
              "result": "P"
           },
           {
              "course": "2007-Engineering Science Lab II",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 50,
              "grade": "S",
              "result": "P"
           },
           {
              "course": "2008-Workshop Practice",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 41,
              "grade": "A",
              "result": "P"
           },
           {
              "course": "2009-Life Skill",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 46,
              "grade": "A",
              "result": "P"
           },
           {
            "course": "2131-Programming in C",
            "examType": "Regular",
            "attendance": "Present",
            "internalMark": 46,
            "grade": "A",
            "result": "P"
         },
         {
            "course": "2139-Programming in C Lab",
            "examType": "Regular",
            "attendance": "Present",
            "internalMark": 44,
            "grade": "A",
            "result": "P"
         }
        ]
     },
    {
       "registerNumber": 20130591,
       "studentName": "SANJAY SREEDHAR P",
       "branch": "Computer Engineering",
       "semester": 3,
       "courses": [
          {
             "course": "3131-Computer Architecture",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 40,
             "grade": "C",
             "result": "P"
          },
          {
             "course": "3001-Environmental Science & Disaster Management",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 31,
             "grade": "C",
             "result": "P"
          },
          {
             "course": "3139-Database Management System Lab",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 41,
             "grade": "A",
             "result": "P"
          },
          {
             "course": "3138-Digital Computer Principles Lab",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 44,
             "grade": "A",
             "result": "P"
          },
          {
             "course": "3137-Objected Oriented Programming Lab",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 47,
             "grade": "A",
             "result": "P"
          },
          {
             "course": "3134-Objected Oriented Programming through C++",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 37,
             "grade": "A",
             "result": "P"
          },
          {
             "course": "3133-Digital Computer Principles",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 40,
             "grade": "C",
             "result": "P"
          },
          {
             "course": "3132-Database Management System",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 38,
             "grade": "C",
             "result": "P"
          }
       ]
    },
    {
       "registerNumber": 20130557,
       "studentName": "ASMA P",
       "branch": "Computer Engineering",
       "semester": 3,
       "courses": [
          {
             "course": "3131-Computer Architecture",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 49,
             "grade": "S",
             "result": "P"
          },
          {
             "course": "3001-Environmental Science & Disaster Management",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 50,
             "grade": "S",
             "result": "P"
          },
          {
             "course": "3139-Database Management System Lab",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 46,
             "grade": "S",
             "result": "P"
          },
          {
             "course": "3138-Digital Computer Principles Lab",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 43,
             "grade": "S",
             "result": "P"
          },
          {
             "course": "3137-Objected Oriented Programming Lab",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 47,
             "grade": "S",
             "result": "P"
          },
          {
             "course": "3134-Objected Oriented Programming through C++",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 49,
             "grade": "S",
             "result": "P"
          },
          {
             "course": "3133-Digital Computer Principles",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 49,
             "grade": "S",
             "result": "P"
          },
          {
             "course": "3132-Database Management System",
             "examType": "Regular",
             "attendance": "Present",
             "internalMark": 48,
             "grade": "S",
             "result": "P"
          }
       ]
    },
    {
        "registerNumber": 20130557,
        "studentName": "ASMA P A",
        "branch": "Computer Engineering",
        "semester": 2,
        "courses": [
           {
              "course": "2001-English for Communication II",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 50,
              "grade": "A",
              "result": "P"
           },
           {
              "course": "2002-Engineering Mathematics II",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 50,
              "grade": "S",
              "result": "P"
           },
           {
              "course": "2003-Engineering Physics II",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 48,
              "grade": "S",
              "result": "P"
           },
           {
              "course": "2004-Engineering Chemistry II",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 48,
              "grade": "S",
              "result": "P"
           },
           {
              "course": "2005-Engineering Graphics",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 50,
              "grade": "S",
              "result": "P"
           },
           {
              "course": "2007-Engineering Science Lab II",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 50,
              "grade": "S",
              "result": "P"
           },
           {
              "course": "2008-Workshop Practice",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 41,
              "grade": "A",
              "result": "P"
           },
           {
              "course": "2009-Life Skill",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 49,
              "grade": "S",
              "result": "P"
           },
           {
            "course": "2131-Programming in C",
            "examType": "Regular",
            "attendance": "Present",
            "internalMark": 50,
            "grade": "S",
            "result": "P"
         },
         {
            "course": "2139-Programming in C Lab",
            "examType": "Regular",
            "attendance": "Present",
            "internalMark": 50,
            "grade": "S",
            "result": "P"
         }
        ]
     }
];


app.get("/", (req, res) => {
    //   const students = req.body.result;
    
      connection.query(
        "SELECT course_code, credit FROM c_data",
        (error, results) => {
          if (error) {
            console.error("Error retrieving data from MySQL server:", error);
            res.status(500).send("Internal server error");
            return;
          }
          const credits = results;
    
          for (const student of students) {
            let totalCreditPoints = 0;
            let totalGradePoints = 0;

            var sem1,sem2,sem3;

            for (const course of student.courses) {
              const [courseCode] = course.course.split("-");
              const creditPoint = credits.find(
                (credit) => credit.course_code === parseInt(courseCode)
              ).credit;
              const gradePoints = { S: 10, A: 9, B: 8, C: 7, D: 6, E: 5, F: 0 };
              const gradePoint = gradePoints[course.grade];
              totalCreditPoints += creditPoint;
              totalGradePoints += creditPoint * gradePoint;
            }
            
            

            const sgpa = (totalGradePoints / totalCreditPoints).toFixed(2);
            // console.log(student.studentName ,sgpa);


            // if(student.semester==1){
            //      sem1=sgpa;
            //     console.log("the sgpa of semester one is :"+sem1);
            // }
            // else if(student.semester==2){
            //      sem2=sgpa;
            //     console.log("\n the sgpa of semester two is :"+sem2);
            // }
            // else if(student.semester==3){
            //      sem3=sgpa;
            //     console.log("\n the sgpa of semester three is :"+sem3);
            // }

            switch (student.semester) {
                case  1:
                    sem1=sgpa;
                    console.log(sem1);
                    break;
                case  2:
                    sem2=sgpa;
                    console.log(sem2);
                    break;
                case  3:
                    sem3=sgpa;
                    console.log(sem3);
                    break;
            
                default:
                    break;
            }


            // student["sgpa"] = sgpa;
            // console.log(student);
            
            
          }
        //   ivde cgpa itta last student maathram cgpa calculate aavm
        var cgpa=(parseFloat(sem1)+parseFloat(sem2)+parseFloat(sem3))/3;
        console.log("the cgpa is:"+cgpa);
        }
        
      );
      // console.log(students);
    
      res.send("result recieved");
});



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
