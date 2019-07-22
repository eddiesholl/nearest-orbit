import { Body, Frame, Location, Distance, SystemHistory } from "./types";
import { earth, sun, mercury, mars } from "./facts";

export const generateFrame = (t: number, previousFrame: Frame): Frame => {
  const earthLocation = locationForBodyAt(t)(earth)
  const sunLocation = locationForBodyAt(t)(sun)
  const otherLocations = [mercury, mars].map(locationForBodyAt(t))
  const distances = otherLocations.map(distanceForBodyAt(t, earthLocation))
  
  const result = {
    t,
    locations: [earthLocation, sunLocation, ...otherLocations],
    distances,
    previousFrame
  }

  return result
}

const distanceForBodyAt = (t: number, earthLocation: Location) => (bodyLocation: Location): Distance => {

  return {
    body: bodyLocation.body,
    au: distanceBetween(earthLocation, bodyLocation)
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

const distanceBetween = (l1: Location, l2: Location): number => {
  const xsq = Math.pow(l2.x - l1.x, 2)
  const ysq = Math.pow(l2.y - l1.y, 2)

  return Math.sqrt(xsq + ysq)
}
