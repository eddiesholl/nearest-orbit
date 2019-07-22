export type BodyName = "mercury" | "earth" | "mars" | "sun";

export interface Body {
  name: BodyName;
  colour: string;
  radius: number;
  period: number;
}

export interface Location {
  body: Body;
  x: number;
  y: number;
  theta: number;
}

export interface Distance {
  body: Body;
  au: number; 
}
export interface Frame {
  t: number;
  locations: Location[];
  distances: Distance[];
}
