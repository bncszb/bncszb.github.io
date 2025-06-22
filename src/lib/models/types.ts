export type Certification = {
  name: string;
  url?: string;
};

export function getCertificationBulletPoints(
  certifications: Certification[]
): string {
  const getBulletPoint = (certification: Certification): string => {
    return certification.url
      ? `- [${certification.name}](${certification.url})`
      : `- ${certification.name}`;
  };
  return certifications.map(getBulletPoint).join("\n");
}
