import { NetworkxSkill, PytorchSkill } from "../skills";
import type { Role } from "./common-roles";

const WignerRole: Role = {
  category: "Research",
  name: "Variational autoencoders in visual systems",
  startDate: new Date("2021-09-01"),
  endDate: new Date("2022-04-01"),
  instutition: "Wigner Research Centre for Physics",
  location: "Budapest",
  bulletPoints: [
    "Study of normal and chained variational autoencoder models trained on natural image patches",
    "Tensorflow Probability",
    "Achieved 6x speedup",
  ],
  skills: [],
};

const LinkGroupRole: Role = {
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
  skills: [PytorchSkill, NetworkxSkill],
};

export default [WignerRole, LinkGroupRole];
