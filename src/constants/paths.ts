
export const homePrefix = "/"

export const paths = {
  homeIndex: homePrefix,
  about: `${homePrefix}about`,
  philosophy: `${homePrefix}about/our-philosophy`,
  team: `${homePrefix}about/team`,
  careers: `${homePrefix}about/careers`,
  insights: `${homePrefix}insights`,
  testimonials: `${homePrefix}testimonials`,
  contact: `${homePrefix}contact-us`,

  // SERVICES
  services: `${homePrefix}services`,
  itConsultancy: `${homePrefix}services/consultancy`,
  cybersecurity: `${homePrefix}services/cybersecurity`,
  blockchainSolutions: `${homePrefix}services/blockchain-solutions`,
  softwareDevelopment: `${homePrefix}services/software-development`,
  products: `${homePrefix}services/products`,
  financialServicesInvestment: `${homePrefix}services/financial-services-investment`,
  trainingCapacityBuilding: `${homePrefix}services/training-capacity-building`,


  industries: `${homePrefix}industries`,
  industriesBankingFinance: `${homePrefix}banking-finance`,
  industriesGovernmentPublicSector: `${homePrefix}government-public-sector`,
  industriesHealthcare: `${homePrefix}healthcare`,
  industriesTelecommunications: `${homePrefix}telecommunications`,
  industriesEnergyUtilities: `${homePrefix}energy-utilities`,
  industriesEducation: `${homePrefix}education`,
};

export const industriesPaths = [
  paths.industries,
  paths.industriesBankingFinance,
  paths.industriesGovernmentPublicSector,
  paths.industriesHealthcare,
  paths.industriesTelecommunications,
  paths.industriesEnergyUtilities,
  paths.industriesEducation,
] as const
 
export const darkHeroPaths = [paths.homeIndex, ...industriesPaths] as const
 
export function isDarkHeroPath(pathname: string): boolean {
  return (darkHeroPaths as readonly string[]).includes(pathname)
}