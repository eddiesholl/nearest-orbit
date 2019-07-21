export type BodyName = "mercury" | "earth" | "mars";

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
  bodyName: BodyName;
  au: number; 
}
export interface Frame {
  t: number;
  locations: Location[];
  distances: Distance[];
}
