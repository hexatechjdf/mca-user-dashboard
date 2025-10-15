import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import { bussinessInfoData } from "./profileData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";

const StateIncorporatedOptions = ["MA", "CA", "NY", "TX", "FL"];

export default function UserInfoCard() {
  const { isOpen, openModal, closeModal } = useModal();
  const [formData, setFormData] = useState({
    businessLegalName: "",
    businessDBAName: "",
    stateIncorporated: "",
    federalTaxID: "",
    amountRequested: "",
    businessAddress: "",
    city: "",
    state: "",
    zipCode: "",
    businessPhone: "",
    businessStartDate: "",
    industryType: "",
    typeOfEntity: "",
    useOfFunds: "",
    homeBasedBusiness: "",
    acceptsCreditCards: "",
    annualRevenue: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave = () => {
    console.log("Saving changes...", formData);
    closeModal();
  };
  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-primary dark:text-white/90 lg:mb-6">
            Business Information{" "}
          </h4>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-7 2xl:gap-x-18">
            {Object.entries(bussinessInfoData).map(([key, value]) => (
              <div key={key}>
                <Label className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (s) => s.toUpperCase())}
                  :
                </Label>
                <p className="text-sm font-medium text-primary dark:text-white/90">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={openModal}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
        >
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
              fill=""
            />
          </svg>
          Edit
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-hidden rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-primary dark:text-white/90">
              Edit Business Information
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <form onSubmit={handleSave} className="flex flex-col">
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <Label htmlFor="businessLegalName" className="mb-2">
                    Business Legal Name
                  </Label>
                  <Input
                    id="businessLegalName"
                    type="text"
                    placeholder="Works by Jesse DeBenedictis"
                    value={formData.businessLegalName}
                    onChange={(e) =>
                      handleChange("businessLegalName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="businessDBAName" className="mb-2">
                    Business D/B/A Name{" "}
                  </Label>
                  <Input
                    id="businessDBAName"
                    type="text"
                    placeholder="Works by Jesse DeBenedictis"
                    value={formData.businessDBAName}
                    onChange={(e) =>
                      handleChange("businessDBAName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="stateIncorporated" className="mb-2">
                    Business D/B/A Name{" "}
                  </Label>
                  <Select
                    value={formData.stateIncorporated}
                    onValueChange={(value) =>
                      handleChange("stateIncorporated", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {StateIncorporatedOptions?.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* {businessInfoFields.map((field, index) => {
                  const isFullWidth = field.type === "select";

                  return (
                    <div
                      key={index}
                      className={`flex flex-col ${
                        isFullWidth ? "lg:col-span-2" : "lg:col-span-1"
                      }`}
                    >
                      <Label className="mb-2">{field.label}</Label>

                      {["text", "number", "tel", "date"].includes(
                        field.type
                      ) && (
                        <Input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          defaultValue={(businessInfoFields as any)[field.name]}
                          onChange={(e) =>
                            handleChange(field.name, e.target.value)
                          }
                        />
                      )}
                      {field.type === "select" && (
                        <Select
                          value={businessInfoFields[field.name] || ""}
                          onValueChange={(value) =>
                            handleChange(field.name, value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            {field.options?.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}

                      {field.type === "radio" && (
                        <RadioGroup
                          defaultValue={(businessInfoFields as any)[field.name]}
                          className="flex gap-4 mt-1"
                          onChange={(value: any) =>
                            handleChange(field.name, value)
                          }
                        >
                          {field.options?.map((opt) => (
                            <div
                              key={opt}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value={opt}
                                id={`${field.name}-${opt}`}
                              />
                              <Label htmlFor={`${field.name}-${opt}`}>
                                {opt}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                    </div>
                  );
                })} */}
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button type="submit" size="sm">
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
