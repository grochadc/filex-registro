const fs = require("fs");
const readline = require("readline");

const stream = fs.createReadStream("data/students.csv");

const lineReader = readline.createInterface({ input: stream });

let headers = [];
const students = [];
let lineIndex = 0;

lineReader.on("line", line => {
  const studentArr = line.split(",");
  if (lineIndex === 0) {
    headers = studentArr;
  } else {
    const studentObj = {};
    headers.forEach((header, index) => {
      if (studentArr[index] === "TRUE") {
        studentObj[header] = true;
      } else if (studentArr[index] === "FALSE") {
        studentObj[header] = false;
      } else if (header === "prev_level") {
        studentObj[header] = Number(studentArr[index]);
      } else {
        studentObj[header] = studentArr[index];
      }

      if (header === "code") {
        if (studentArr[index] === "EXTERNO") {
          studentObj.code = studentArr[8];
          console.log(studentObj);
        }
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
