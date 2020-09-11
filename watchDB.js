const fs = require("fs");
const dir = "data/";
const { spawn } = require("child_process");
console.log(`Watching for file changes on ${dir}`);

const timeoutOpts = [
  () => {
    if (queue.length === 0) {
      console.log("First timeout");
    } else {
      console.log("finished parsing", queue);
      const git = spawn("git", ["add", ...queue]);

      git.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
      });

      git.stderr.on("data", data => {
        console.error(`stderr: ${data}`);
      });

      git.on("close", code => {
        console.log(`child process exited with code ${code}`);
        const now = new Date();
        const dateStringArr = now.toDateString().split(" ");
        const gitCommit = spawn("git", [
          "commit",
          "-m",
          `Update db ${dateStringArr[1]}-${
            dateStringArr[2]
          }-${now.getHours()}:${now.getMinutes()}`
        ]);

        gitCommit.stdout.on("data", data => console.log(`stdout: ${data}`));
        gitCommit.on("close", code =>
          console.log(`child process exited with code ${code}`)
        );
        console.log("Resetting queue");
        queue = [];
      });
    }
  },
  "1000"
];
let timeout = setTimeout(timeoutOpts[0], timeoutOpts[1]);

let queue = [];

fs.watch(dir, (eventType, changedFile) => {
  const changedPath = dir + changedFile;
  clearTimeout(timeout);
  queue.push(changedPath);
  console.log(`File Changed`, changedPath);
  timeout = setTimeout(timeoutOpts[0], timeoutOpts[1]);
});
