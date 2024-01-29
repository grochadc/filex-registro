import { EnrolledStudent } from "generated/grapqhl-types";

function parse(array: any[]) {
  const headers = Object.keys(array[0]);
  const table = array.map((row) => {
    return headers.map((column) => row[column]);
  });
  return [headers].concat(table).join("\n");
}

export function downloadMasterList(
  masterlist: EnrolledStudent[],
  fileName: string
) {
  const finalMasterList = masterlist.map((student) => ({
    ...student,
    group: student.group.name,
  }));
  const el = document.createElement("a");
  const file = new Blob([parse(finalMasterList)], { type: "text/csv" });
  el.hidden = true;
  el.href = URL.createObjectURL(file);
  el.download = `${fileName}.csv`;
  document.body.appendChild(el);
  el.click();
}

export function calculateCicloActual(date: Date): string {
  const year = date.getFullYear().toString();
  const semester = date.getMonth() > 6 ? "B" : "A";
  return year + semester;
};
