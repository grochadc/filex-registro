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
  const file = new Blob([parse(masterlist)], { type: "text/csv" });
  el.hidden = true;
  el.href = URL.createObjectURL(file);
  el.download = `${fileName}.csv`;
  document.body.appendChild(el);
  el.click();
}
