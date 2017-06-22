
module.exports = {
  // colors
  white: "#fff",
  black: "#000",
  red: "#d9534f",
  orange: "#f0ad4e",
  yellow: "#ffd500",
  green: "#5cb85c",
  blue: "#0275d8",
  teal: "#5bc0de",
  pink: "#ff5b77",
  purple: "#613d7c",

  // Create grayscale
  grayDark: "#292b2c",
  gray: "#464a4c",
  grayLight: "#636c72",
  grayLighter: "#eceeef",
  grayLightest: "#f7f7f9",

  // Derivative colors
  get colorPrimary() {
    return this.blue;
  },
  get colorSecondary() {
    return this.teal;
  },
  get colorSuccess() {
    return this.green;
  },
  get colorInfo() {
    return this.teal;
  },
  get colorWarning() {
    return this.orange;
  },
  get colorDanger() {
    return this.red;
  },
  get colorInverse() {
    return this.grayDark;
  },
  get colorLink() {
    return this.blue;
  }
};
