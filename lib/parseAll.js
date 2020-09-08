const { parseCsv } = require("./csvParser");
const fs = require("fs");
const studentsStream = fs.createReadStream("data/students.csv");
const ingresoStream = fs.createReadStream("data/nuevo_ingreso.csv");

async function main() {
  const students = await parseCsv(studentsStream);
  const nuevo_ingreso = await parseCsv(ingresoStream);
  let data = {
    students: students,
    freshmen: nuevo_ingreso
  };
  fs.writeFile("./db.json", JSON.stringify(data, null, 2), () =>
    console.log("File written")
  );
}

main();
