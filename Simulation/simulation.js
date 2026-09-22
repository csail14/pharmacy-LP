import { Pharmacy } from "../Pharmacy/pharmacy.js";
import { Drug } from "../Drug/drug.js";

export const createInitialDrugs = () => [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 12, 35),
  new Drug("Magic Pill", 15, 40),
];

export const simulate = (days, drugs = createInitialDrugs()) => {
  const pharmacy = new Pharmacy(drugs);
  const log = [];
  for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
    log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
  }
  return log;
};
