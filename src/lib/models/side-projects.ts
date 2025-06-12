import type { Project } from "./project";
import { dockerSkill, neo4jSkill, pythonSkill, snomedSkill } from "./skills";

const snomedNeo4jProject: Project = {
  name: "SNOMED Neo4j",
  shortDescription:
    "Containerized Neo4j representation of SNOMED CT with Python client",
  description: `
A containerized SNOMED CT database using Neo4j, with an option to reduce the graph to hierarchies under certain concepts selected by the user or keep only given relationship types for a smaller image.

Due to licensing, the data is imported during local build using a UMLS API key.
`,
  skills: [dockerSkill, neo4jSkill, pythonSkill, snomedSkill],
  github: "https://github.com/bncszb/snomed-neo4j",
};

export const sideProjects = [snomedNeo4jProject];
