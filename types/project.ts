import { Button } from "./button";

export type Project = {
  id: number;
  title: string;
  image: string;
  translationKey: string;
  techs: string[];
  buttons: Button[];
};
