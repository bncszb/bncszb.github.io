export type Node = {
  id: string;
  fx?: number;
  fy?: number;
};

export type Edge = {
  source: string;
  target: string;
  weight?: number;
};

export type Graph = {
  nodes: Node[];
  edges: Edge[];
};
