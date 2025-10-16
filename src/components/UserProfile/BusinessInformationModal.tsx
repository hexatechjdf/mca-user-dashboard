import Input from "../form/input/InputField";
import Label from "../form/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalenderIcon } from "../../icons";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";

export default function BusinessInformationModal({ ...props }) {
  const {
    isOpen,
    closeModal,
    formData,
    handleChange,
    handleSave,
    formatDate,
    stateIncorporatedOptions,
    stateOptions,
    typeOfEntityOptions,
    useOfFundsOptions,
  } = props;
  return (
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
              <div className="lg:col-span-2">
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
                    <SelectValue placeholder="Select State (MA)" />
                  </SelectTrigger>

                  <SelectContent>
                    {stateIncorporatedOptions?.map((opt: any) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="federalTaxID" className="mb-2">
                  Federal Tax ID #{" "}
                </Label>
                <Input
                  id="federalTaxID"
                  type="text"
                  placeholder="42-4368726"
                  value={formData.federalTaxID}
                  onChange={(e) => handleChange("federalTaxID", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="amountRequested" className="mb-2">
                  Amount Requested{" "}
                </Label>
                <Input
                  id="amountRequested"
                  type="number"
                  placeholder="5002000"
                  value={formData.amountRequested}
                  onChange={(e) =>
                    handleChange("amountRequested", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="businessAddress" className="mb-2">
                  Business Address{" "}
                </Label>
                <Input
                  id="businessAddress"
                  type="text"
                  placeholder="60 Park St"
                  value={formData.businessAddress}
                  onChange={(e) =>
                    handleChange("businessAddress", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="city" className="mb-2">
                  City{" "}
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Beverly"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
              </div>

              <div className="lg:col-span-2">
                <Label htmlFor="state" className="mb-2">
                  State{" "}
                </Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => handleChange("state", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select State (MA)" />
                  </SelectTrigger>
                  <SelectContent>
                    {stateOptions?.map((opt: any) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="zipCode" className="mb-2">
                  Zip Code{" "}
                </Label>
                <Input
                  id="zipCode"
                  type="text"
                  placeholder="01915"
                  value={formData.zipCode}
                  onChange={(e) => handleChange("zipCode", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="businessPhone" className="mb-2">
                  Business Phone #{" "}
                </Label>
                <Input
                  id="businessPhone"
                  type="tel"
                  placeholder="(617) 470-2099"
                  value={formData.businessPhone}
                  onChange={(e) =>
                    handleChange("businessPhone", e.target.value)
                  }
                />
              </div>

              <div>
                <Label className="mb-2">Business Start Date </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="!flex !items-center !justify-between w-full h-11 hover:bg-white"
                    >
                      {formData.businessStartDate ? (
                        formatDate(formData.businessStartDate)
                      ) : (
                        <span className="text-gray-400">Pick start date</span>
                      )}
                      <CalenderIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    className="p-1 border-none bg-white"
                  >
                    <Calendar
                      mode="single"
                      selected={formData.businessStartDate}
                      onSelect={(date: any) =>
                        handleChange("businessStartDate", date)
                      }
                      className="w-full"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="industryType" className="mb-2">
                  Industry Type{" "}
                </Label>
                <Input
                  id="industryType"
                  type="text"
                  placeholder="Construction Residentials"
                  value={formData.industryType}
                  onChange={(e) => handleChange("industryType", e.target.value)}
                />
              </div>

              <div className="lg:col-span-1">
                <Label htmlFor="typeOfEntity" className="mb-2">
                  Type of Entity{" "}
                </Label>
                <Select
                  value={formData.typeOfEntity}
                  onValueChange={(value) => handleChange("typeOfEntity", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sole Proprietors" />
                  </SelectTrigger>
                  <SelectContent>
                    {typeOfEntityOptions?.map((opt: any) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="lg:col-span-1">
                <Label htmlFor="useOfFunds" className="mb-2">
                  Use of Funds{" "}
                </Label>
                <Select
                  value={formData.useOfFunds}
                  onValueChange={(value) => handleChange("useOfFunds", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Equipment" />
                  </SelectTrigger>
                  <SelectContent>
                    {useOfFundsOptions?.map((opt: any) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="lg:col-span-2">
                <Label htmlFor="annualRevenue" className="mb-2">
                  Annual Revenue{" "}
                </Label>
                <Select
                  value={formData.annualRevenue}
                  onValueChange={(value) =>
                    handleChange("annualRevenue", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Equipment" />
                  </SelectTrigger>
                  <SelectContent>
                    {stateIncorporatedOptions?.map((opt: any) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="homeBasedBusiness" className="mb-2">
                  Home Based Business{" "}
                </Label>
                <RadioGroup
                  value={formData.homeBasedBusiness}
                  onValueChange={(value) =>
                    handleChange("homeBasedBusiness", value)
                  }
                  className="flex"
                  defaultValue="homeBasedBusinessYes"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="homeBasedBusinessYes"
                      id="homeBasedBusinessYes"
                    />
                    <Label htmlFor="homeBasedBusinessYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="homeBasedBusinessNo"
                      id="homeBasedBusinessNo"
                    />
                    <Label htmlFor="homeBasedBusinessNo">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="acceptsCreditCards" className="mb-2">
                  Does Business Accept Credit Cards?{" "}
                </Label>
                <RadioGroup
                  value={formData.acceptsCreditCards}
                  onValueChange={(value) =>
                    handleChange("acceptsCreditCards", value)
                  }
                  className="flex"
                  defaultValue="acceptsCreditCardsYes"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="acceptsCreditCardsYes"
                      id="acceptsCreditCardsYes"
                    />
                    <Label htmlFor="acceptsCreditCardsYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="acceptsCreditCardsNO"
                      id="acceptsCreditCardsNO"
                    />
                    <Label htmlFor="acceptsCreditCardsNO">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={closeModal}
            >
              Close
            </Button>
            <Button type="submit" size="sm">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
