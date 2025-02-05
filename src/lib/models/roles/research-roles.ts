import {
  dockerSkill,
  networkxSkill,
  pythonSkill,
  pytorchSkill,
  tensorflowSkill,
} from "../skills";
import type { Role } from "./common-roles";

const wignerRole: Role = {
  category: "Research",
  name: "Variational autoencoders in visual systems",
  startDate: new Date("2021-09-01"),
  endDate: new Date("2022-04-01"),
  instutition: "Wigner Research Centre for Physics",
  location: "Budapest",
  bulletPoints: [
    "Study of normal and chained variational autoencoder models trained on natural image patches",
    "Achieved 6x speedup",
  ],
  description: `
I joined the Theoretical Neuroscience and Complex Systems Research Group to study vision. During my work there I helped by training several types of Variational Autoencoders using Tensorflow Probabilty. I also managed to improve the the workflow by speeding up training significantly.

The resulting paper is available [here](https://openreview.net/pdf?id=8dfboOQfYt3).
`,
  skills: [tensorflowSkill, pythonSkill, dockerSkill],
};

const linkGroupRole: Role = {
  category: "Research",
  name: "Cooperation formation in networks",
  startDate: new Date("2018-09-01"),
  endDate: new Date("2021-06-01"),
  instutition: "LinkGroup",
  location: "Budapest",
  bulletPoints: [
    "The role of nodes with fix strategies in spatial social dilemma games",
    "Prediction of nodes' capability to spread cooperation using semi-supervised learning with Graph Convolutional Networks",
  ],
  description: `
During my time in LinkGroup at Semmelweis University I studied the dynamics of cooperative / defective behavior in complex graphs.

The goal was to learn the properties of certain node sets that could persuade the whole graph into cooperation. Using simulations and later Graph Neural Networks we were able to identify certain properties that enhance the persuasiveness of a node. The idea is that these selected sets share members with tumor inducing node sets.
`,

  skills: [pytorchSkill, networkxSkill, pythonSkill],
};

export default [wignerRole, linkGroupRole];
