import { Body, Frame, Location, Distance } from "./types";
import { earth, sun, mercury, mars } from "./facts";

export const engine = (t: number): Frame => {
  const earthLocation = locationForBodyAt(t)(earth)
  const sunLocation = locationForBodyAt(t)(sun)
  const otherLocations = [mercury, mars].map(locationForBodyAt(t))
  const distances = otherLocations.map(distanceForBodyAt(t))
  
  const result = {
    t,
    locations: [earthLocation, sunLocation, ...otherLocations],
    distances
  }

  return result
}

const distanceForBodyAt = (t: number) => (location: Location): Distance => {
  return {
    body: location.body,
    au: 0
  } as Distance
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
