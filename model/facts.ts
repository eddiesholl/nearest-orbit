import { BodyName } from "./types";

export const sun = {
  name: "sun" as BodyName,
  radius: 0,
  period: 1,
  colour: '#ee9'
}
export const earth = {
  name: "earth" as BodyName,
  radius: 1,
  period: 365.25,
  colour: "#19e"
}

const mercury = {
  name: "mercury",
  radius: 0.389,
  period: 87.77
}

const mars = {
  name: "mars",
  radius: 1.524,
  period: 686.95
}

export const Bodies = {
  earth,
  mercury,
  mars
}
