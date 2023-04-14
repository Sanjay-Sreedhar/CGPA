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

const students=[
  


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
        "studentName": "ASMA P A",
        "branch": "Computer Engineering",
        "semester": 1,
        "courses": [
           {
              "course": "1001-English for Communication I",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 48,
              "grade": "B",
              "result": "P"
           },
           {
              "course": "1002-Engineering Mathematics I",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 50,
              "grade": "S",
              "result": "P"
           },
           {
              "course": "1003-Engineering Physics I",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 46,
              "grade": "S",
              "result": "P"
           },
           {
              "course": "1004-Engineering Chemistry I",
              "examType": "Regular",
              "attendance": "Present",
              "internalMark": 48,
              "grade": "S",
              "result": "P"
           },
           
           
           
           {
            "course": "1008-Computing Fundamentals",
            "examType": "Regular",
            "attendance": "Present",
            "internalMark": 50,
            "grade": "S",
            "result": "P"
         },
         {
            "course": "1009-Health & Physical Education",
            "examType": "Regular",
            "attendance": "Present",
            "internalMark": 41,
            "grade": "A",
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
      },{
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
  ;


app.get("/", (req, res) => {
   connection.query(
     "SELECT course_code, credit FROM c_data",
     (error, results) => {
       if (error) {
         console.error("Error retrieving data from MySQL server:", error);
         res.status(500).send("Internal server error");
         return;
       }
       const credits = results;
       let sem1=sem2=sem3=sem4=sem5=sem6=0;// declare variables outside of loop
       let cgpa=0;
       var s1=s2=s3=s4=s5=s6=0;
       for (const student of students) {
         let totalCreditPoints = 0;
         let totalGradePoints = 0;
 
         const rno = student.registerNumber; // move register number outside of loop
 
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
 
         switch (student.semester) {
           case 1:
             sem1 = sgpa;
             connection.query(`update cgpa set sem1='${sem1}' where register_number='${rno}'`,(err,result)=>{
                if (err) throw err;
                // console.log("sem1 inserted"); 
             });
             break;
           case 2:
             sem2 = sgpa;
             connection.query(`update cgpa set sem2='${sem2}' where register_number='${rno}'`,(err,result)=>{
                if (err) throw err;
                // console.log("sem2 inserted"); 
             });
             break;
           case 3:
             sem3 = sgpa;
             connection.query(`update cgpa set sem3='${sem3}' where register_number='${rno}'`,(err,result)=>{
                if (err) throw err;
                // console.log("sem3 inserted"); 
             });
             break;
           default:
             break;
         }


        //  connection.query(`select sem1,sem2,sem3,sem4,sem5,sem6 from cgpa where register_number='${rno}'`,(err,result)=>{
        //     if (err) throw err;
        //     s1=result[0].sem1;
        //     // console.log("sem1 "+s1);
        //     s2=result[0].sem2;
        //     // console.log("sem2 "+s2);
        //     s3=result[0].sem3;
        //     // console.log("sem3 "+s3);
        //     s4=result[0].sem4;
        //     // console.log("sem4 "+s4);
        //     s5=result[0].sem5;
        //     // console.log("sem5 "+s5);
        //     s6=result[0].sem6;
        //     // console.log("sem6 "+s6);


        //     if((s6==0)&&(s5==0)&&(s4==0)&&(s3==0)&&(s2==0)){
        //         cgpa=parseFloat(s1);
        //         console.log(cgpa);
        //      }
        //      else if((s6==0)&&(s5==0)&&(s4==0)&&(s3==0)){
        //         cgpa=((parseFloat(s1)+parseFloat(s2))/2);
        //         console.log(cgpa);
        //      }
        //      else if((s6==0)&&(s5==0)&&(s4==0)){
        //         cgpa=((parseFloat(s1)+parseFloat(s2)+parseFloat(s3))/3);
        //         console.log(cgpa);
        //      }
        //      else if((s6==0)&&(s5==0)){
        //         cgpa=((parseFloat(s1)+parseFloat(s2)+parseFloat(s3)+parseFloat(s4))/4);
        //         console.log(cgpa);
        //      }
        //      else if((s6==0)){
        //         cgpa=((parseFloat(s1)+parseFloat(s2)+parseFloat(s3)+parseFloat(s4)+parseFloat(s5))/5);
        //         console.log(cgpa);
        //      }
        //      else{
        //         cgpa=((parseFloat(s1)+parseFloat(s2)+parseFloat(s3)+parseFloat(s4)+parseFloat(s5)+parseFloat(s6))/6);
        //         console.log(cgpa);
        //      }

        //      connection.query(`update cgpa set cgpa='${cgpa}' where register_number='${rno}'`,(err,results)=>{
        //         if(err) throw err;
        //         console.log("cgpa inserted");
        //      });
        //  });

         
        connection.query(`select sem1,sem2,sem3,sem4,sem5,sem6 from cgpa where register_number='${rno}'`, (err, result) => {
            if (err) throw err;
            
            if (!result || !result[0] || Object.keys(result[0]).length === 0) {
              console.log('No results found for register number ' + rno);
              return;
            }
          
            const s1 = result[0].sem1;
            const s2 = result[0].sem2;
            const s3 = result[0].sem3;
            const s4 = result[0].sem4;
            const s5 = result[0].sem5;
            const s6 = result[0].sem6;
          
            // calculate CGPA
            let cgpa;
            if ((s6 == 0) && (s5 == 0) && (s4 == 0) && (s3 == 0) && (s2 == 0)) {
              cgpa = parseFloat(s1);
              console.log(cgpa);
            } else if ((s6 == 0) && (s5 == 0) && (s4 == 0) && (s3 == 0)) {
              cgpa = ((parseFloat(s1) + parseFloat(s2)) / 2);
              console.log(cgpa);
            } else if ((s6 == 0) && (s5 == 0) && (s4 == 0)) {
              cgpa = ((parseFloat(s1) + parseFloat(s2) + parseFloat(s3)) / 3);
              console.log(cgpa);
            } else if ((s6 == 0) && (s5 == 0)) {
              cgpa = ((parseFloat(s1) + parseFloat(s2) + parseFloat(s3) + parseFloat(s4)) / 4);
              console.log(cgpa);
            } else if ((s6 == 0)) {
              cgpa = ((parseFloat(s1) + parseFloat(s2) + parseFloat(s3) + parseFloat(s4) + parseFloat(s5)) / 5);
              console.log(cgpa);
            } else {
              cgpa = ((parseFloat(s1) + parseFloat(s2) + parseFloat(s3) + parseFloat(s4) + parseFloat(s5) + parseFloat(s6)) / 6);
              console.log(cgpa);
            }
          
            connection.query(`update cgpa set cgpa='${cgpa}' where register_number='${rno}'`, (err, results) => {
              if (err) throw err;
              console.log("cgpa inserted");
            });
          });
          

        //  connection.query(
        //    `UPDATE cgpa SET sem1='${sem1}', sem2='${sem2}', sem3='${sem3}',cgpa='${cgpa}' WHERE register_number='${rno}'`,
        //    (err, result) => {
        //      if (err) {
        //        console.log(err);
        //        throw err;
        //      }
        //      console.log("updated successfully");
             
        //    }
        //  );
         
         

         student["sgpa"] = sgpa;
       }
 
       res.send("result received");
     }
   );
 });
 


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
