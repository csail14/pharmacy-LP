import fs from "fs";
import { simulate } from "./Simulation/simulation.js";

const simulateResult = simulate(30);

/* eslint-disable no-console */
fs.writeFile(
  "output.json",
  JSON.stringify({ result: simulateResult }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  },
);

/* eslint-enable no-console */
