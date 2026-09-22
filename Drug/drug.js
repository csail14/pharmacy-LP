const MAX_BENEFIT = 50;
const MIN_BENEFIT = 0;

const updateBasicDrug = (drug) => {
  drug.decreaseExpiresIn();
  drug.decreaseBenefit(drug.isExpired() ? 2 : 1);
};

const updateDafalganDrug = (drug) => {
  drug.decreaseExpiresIn();
  drug.decreaseBenefit(drug.isExpired() ? 4 : 2);
};

const updateHerbalTeaDrug = (drug) => {
  drug.decreaseExpiresIn();
  drug.increaseBenefit(drug.isExpired() ? 2 : 1);
};

const updateMagicPillDrug = () => {
  // Magic Pill does not change its benefit or expiresIn
};

const updateFervexDrug = (drug) => {
  drug.decreaseExpiresIn();
  if (drug.isExpired()) {
    drug.benefit = 0;
  } else if (drug.expiresIn < 5) {
    drug.increaseBenefit(3);
  } else if (drug.expiresIn < 10) {
    drug.increaseBenefit(2);
  } else {
    drug.increaseBenefit(1);
  }
};

const UPDATERS = {
  "Herbal Tea": updateHerbalTeaDrug,
  "Magic Pill": updateMagicPillDrug,
  Fervex: updateFervexDrug,
  Dafalgan: updateDafalganDrug,
};

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateDrugBenefit() {
    const updater = UPDATERS[this.name];
    if (updater) {
      updater(this);
    } else {
      updateBasicDrug(this);
    }
  }

  isExpired() {
    return this.expiresIn < 0;
  }

  decreaseBenefit(amount) {
    this.benefit = Math.max(MIN_BENEFIT, this.benefit - amount);
  }

  increaseBenefit(amount) {
    this.benefit = Math.min(MAX_BENEFIT, this.benefit + amount);
  }

  decreaseExpiresIn() {
    this.expiresIn -= 1;
  }
}
