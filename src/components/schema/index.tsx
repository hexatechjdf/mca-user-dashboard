import * as yup from "yup";

// Business Information
export const BusinessInformationSchema = yup.object().shape({
  businessLegalName: yup.string().required("Business legal name is required"),
  businessDBAName: yup.string().required("Business DBA name is required"),
  stateIncorporated: yup.string().required("Please select state incorporated"),
  federalTaxID: yup
    .string()
    .required("Federal Tax ID is required")
    .matches(/^\d{2}-\d{7}$/, "Format should be XX-XXXXXXX"),
  amountRequested: yup
    .number()
    .typeError("Amount must be a number")
    .required("Amount is required"),
  businessAddress: yup.string().required("Business address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("Please select a state"),
  zipCode: yup
    .string()
    .required("Zip Code is required")
    .matches(/^\d{5}$/, "Zip must be 5 digits"),
  businessPhone: yup
    .string()
    .required("Business phone is required")
    .matches(/^(\+?[1-9]\d{6,14}|0\d{9,14})$/, "Enter a valid phone number"),
  businessStartDate: yup.date().required("Start date is required"),
  industryType: yup.string().required("Industry type is required"),
  typeOfEntity: yup.string().required("Type of entity is required"),
  useOfFunds: yup.string().required("Use of funds is required"),
  annualRevenue: yup.string().required("Annual revenue is required"),
  homeBasedBusiness: yup.string().required("Please select an option"),
  acceptsCreditCards: yup.string().required("Please select an option"),
});

// Owner Information

export const OwnerInformationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  ssn: yup
    .string()
    .required("SSN is required")
    .matches(/^\d{3}-\d{2}-\d{4}$/, "Invalid SSN format (e.g. 123-45-6789)"),
  dateOfBirth: yup.string().required("Date of birth is required"),
  businessOwnership: yup.string().required("Business ownership is required"),
  cellPhone: yup
    .string()
    .required("Cell phone is required")
    .matches(/^(\+?[1-9]\d{6,14}|0\d{9,14})$/, "Enter a valid phone number"),

  homeAddress: yup.string().required("Home address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup.string().required("Zip code is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});
