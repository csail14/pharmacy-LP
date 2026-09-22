import { simulate } from "./simulation.js";
import expected from "../output.json";

test("simulation on 30 days should match the expected output", () => {
  const result = simulate(30);
  expect(result).toEqual(expected.result);
});
