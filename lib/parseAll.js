const { parseCsv } = require("./csvParser");
const fs = require("fs");
const studentsStream = fs.createReadStream("data/students.csv");
const ingresoStream = fs.createReadStream("data/nuevo_ingreso.csv");
const reubicacionStream = fs.createReadStream("data/reubicacion.csv");

async function main() {
  const students = await parseCsv(studentsStream);
  const nuevo_ingreso = await parseCsv(ingresoStream);
  const reubicacion = await parseCsv(reubicacionStream);
  let data = {
    students: students,
    freshmen: nuevo_ingreso,
    reubicacion: reubicacion
  };
  fs.writeFile("./db.json", JSON.stringify(data, null, 2), () =>
    console.log("File written")
  );
}

main();
