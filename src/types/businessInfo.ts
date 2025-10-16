export interface BusinessInfo {
  businessLegalName: string;
  businessDBAName: string;
  stateIncorporated: string;
  federalTaxID: string;
  amountRequested: number;
  businessAddress: string;
  city: string;
  state: string;
  zipCode: string;
  businessPhone: string;
  businessStartDate: string;
  industryType: string;
  typeOfEntity: string;
  useOfFunds: string;
  homeBasedBusiness: string;
  acceptsCreditCards: string;
  annualRevenue: string;
}

export interface BusinessInformationFormData {
  businessLegalName: string;
  businessDBAName: string;
  stateIncorporated: string;
  federalTaxID: string;
  amountRequested: string;
  businessAddress: string;
  city: string;
  state: string;
  zipCode: string;
  businessPhone: string;
  businessStartDate?: Date;
  industryType: string;
  typeOfEntity: string;
  useOfFunds: string;
  homeBasedBusiness: "yes" | "no" | "";
  acceptsCreditCards: "yes" | "no" | "";
  annualRevenue: string;
}
