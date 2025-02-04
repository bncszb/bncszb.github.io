import type { Tool } from "./tools";

export type Project = {
    name: string;
    shortDescription: string;
    description?: string;
    bulletPoints?: string[];
    tools?: Tool[];
  };
  