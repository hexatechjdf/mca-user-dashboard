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
  amountRequested: number;
  businessAddress: string;
  city: string;
  state: string;
  zipCode: string;
  businessPhone: string;
  businessStartDate: Date;
  industryType: string;
  typeOfEntity: string;
  useOfFunds: string;
  annualRevenue: string;
  homeBasedBusiness: string;
  acceptsCreditCards: string;
}

export interface OwnerInformationFormData {
  firstName: string;
  lastName: string;
  ssn: string;
  dateOfBirth: string;
  businessOwnership: string;
  cellPhone: string;
  homeAddress: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
}

export interface FileItem {
  name: string;
  date: string;
  size?: string;
  url?: string;
  type: "original" | "watermarked" | "short";
}

export interface TabItem {
  value: string;
  label: string;
  files: FileItem[];
  onDrop: (
    files: File[],
    fileType: "original" | "watermarked" | "short"
  ) => void;
  showSubTabs: boolean;
}

export interface DealFileCardProps {
  showRequestButton?: boolean;
  showTabs?: boolean;
  tabItems?: TabItem[];
  files?: FileItem[];
  onDrop?: (files: File[]) => void;
}
