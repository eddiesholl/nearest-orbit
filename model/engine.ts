import { Body, Frame, Location } from "./types";
import { earth, sun } from "./facts";

export const engine = (t: number): Frame => {
  const result = {
    t,
    locations: [earth, sun].map(locationForBodyAt(t)),
    distances: []
  }
  console.dir(result)

  return result
}

const locationForBodyAt = (t: number) => (body: Body): Location => {
  const circumference = 2 * Math.PI * body.radius;
  const theta = circumference * (t / body.period)
  return {
    body,
    x: Math.cos(theta) * body.radius,
    y: Math.sin(theta) * body.radius,
    theta: theta
  } as Location
}
