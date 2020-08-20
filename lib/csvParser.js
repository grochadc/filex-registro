const fs = require("fs");
const readline = require("readline");

const stream = fs.createReadStream("data/students.csv");

const lineReader = readline.createInterface({ input: stream });

let headers = [];
const students = [];
const externalStudents = [];
let lineIndex = 0;

lineReader.on("line", line => {
  const studentArr = line.split(",");
  if (lineIndex === 0) {
    headers = studentArr;
  } else {
    const studentObj = {};
    headers.forEach((item, index) => {
      if (studentArr[index] === "TRUE") {
        studentObj[item] = true;
      } else if (studentArr[index] === "FALSE") {
        studentObj[item] = false;
      } else if (item === "prev_level") {
        studentObj[item] = Number(studentArr[index]);
      } else {
        studentObj[item] = studentArr[index];
      }
    });
    studentObj.id = studentObj["code"];
    students.push(studentObj);
  }

  lineIndex++;
});

lineReader.on("close", () => {
  let data = { students: students };
  fs.writeFile("./db.json", JSON.stringify(data, null, 2), () =>
    console.log("File written")
  );
});
