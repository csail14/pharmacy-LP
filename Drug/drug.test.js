import { Drug } from "./drug.js";
import { Pharmacy } from "../Pharmacy/pharmacy.js";

const simulateOneUpdate = (name, expiresIn, benefit) => {
  const pharmacy = new Pharmacy([new Drug(name, expiresIn, benefit)]);
  return pharmacy.updateBenefitValue()[0];
};

describe("One update on basic drug", () => {
  it("should decrease the benefit and expiresIn of 1 when expiresIn is greater than 0 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Doliprane", 2, 3)).toEqual(
      new Drug("Doliprane", 1, 2),
    );
  });
  it("should decrease the benefit and expiresIn of 2 when expiresIn is less than 0 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Doliprane", -1, 3)).toEqual(
      new Drug("Doliprane", -2, 1),
    );
  });
  it("should decrease the benefit and expiresIn of 2 when expiresIn is egal 0 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Doliprane", 0, 3)).toEqual(
      new Drug("Doliprane", -1, 1),
    );
  });
  it("should decrease only the expiresIn if the benefit is egal 0", () => {
    expect(simulateOneUpdate("Doliprane", 3, 0)).toEqual(
      new Drug("Doliprane", 2, 0),
    );
  });
});

describe("One update on Herbal Tea drug", () => {
  it("should increase the benefit of 1 when expiresIn is greater than 0 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Herbal Tea", 2, 3)).toEqual(
      new Drug("Herbal Tea", 1, 4),
    );
  });
  it("should increase the benefit of 2 when expiresIn is less than 0 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Herbal Tea", -1, 3)).toEqual(
      new Drug("Herbal Tea", -2, 5),
    );
  });
  it("should increase the benefit of 2 when expiresIn is egal 0 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Herbal Tea", 0, 3)).toEqual(
      new Drug("Herbal Tea", -1, 5),
    );
  });
  it("should decrease only the expiresIn if the benefit is egal 50", () => {
    expect(simulateOneUpdate("Herbal Tea", 3, 50)).toEqual(
      new Drug("Herbal Tea", 2, 50),
    );
  });
});

describe("One update on Magic Pill drug", () => {
  it("should do nothing to the benefit and expiresIn when expiresIn is greater than 0 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Magic Pill", 2, 3)).toEqual(
      new Drug("Magic Pill", 2, 3),
    );
  });
  it("should do nothing to the benefit and expiresIn when expiresIn is less than 0 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Magic Pill", -1, 3)).toEqual(
      new Drug("Magic Pill", -1, 3),
    );
  });
});

describe("One update on Fervex drug", () => {
  it("should increase the benefit of 1 when expiresIn is greater than 10 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Fervex", 11, 3)).toEqual(
      new Drug("Fervex", 10, 4),
    );
  });
  it("should increase the benefit of 2 when expiresIn is egal to 10 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Fervex", 10, 3)).toEqual(
      new Drug("Fervex", 9, 5),
    );
  });
  it("should increase the benefit of 2 when expiresIn is greater than 5 and less or egal 10 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Fervex", 7, 3)).toEqual(new Drug("Fervex", 6, 5));
  });
  it("should increase the benefit of 3 when expiresIn is egal 5 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Fervex", 5, 3)).toEqual(new Drug("Fervex", 4, 6));
  });
  it("should increase the benefit of 3 when expiresIn is less or egal 5 and more than 0 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Fervex", 4, 3)).toEqual(new Drug("Fervex", 3, 6));
  });
  it("should decrease the benefit to 0 3 when expiresIn is 0 or less ", () => {
    expect(simulateOneUpdate("Fervex", 0, 3)).toEqual(
      new Drug("Fervex", -1, 0),
    );
  });
  it("should not increase the benefit if benefit is already 50", () => {
    expect(simulateOneUpdate("Fervex", 5, 50)).toEqual(
      new Drug("Fervex", 4, 50),
    );
  });
});

describe("One update on Dafalgan drug", () => {
  it("should decrease the benefit and expiresIn of 2 when expiresIn is greater than 0 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Dafalgan", 2, 3)).toEqual(
      new Drug("Dafalgan", 1, 1),
    );
  });
  it("should decrease the benefit and expiresIn of 4 when expiresIn is less than 0 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Dafalgan", -1, 5)).toEqual(
      new Drug("Dafalgan", -2, 1),
    );
  });
  it("should decrease the benefit and expiresIn of 4 when expiresIn is egal 0 and benefit is between 0 and 50", () => {
    expect(simulateOneUpdate("Dafalgan", 0, 5)).toEqual(
      new Drug("Dafalgan", -1, 1),
    );
  });
  it("should decrease only the expiresIn if the benefit is egal 0", () => {
    expect(simulateOneUpdate("Dafalgan", 3, 0)).toEqual(
      new Drug("Dafalgan", 2, 0),
    );
  });
});
