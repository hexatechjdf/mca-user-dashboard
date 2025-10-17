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
import { Controller } from "react-hook-form";
import ModalHeader from "./ModalHeader";

export default function BusinessInformationModal({ ...props }) {
  const {
    isOpen,
    closeModal,
    register,
    control,
    handleSubmit,
    handleSave,
    errors,
    formatDate,
    stateIncorporatedOptions,
    stateOptions,
    typeOfEntityOptions,
    useOfFundsOptions,
  } = props;
  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-hidden rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <ModalHeader
          title="Edit Business Information"
          description="Update your details to keep your profile up-to-date."
        />
        <form onSubmit={handleSubmit(handleSave)} className="flex flex-col">
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
                  error={!!errors.businessLegalName}
                  {...register("businessLegalName")}
                />

                {errors.businessLegalName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.businessLegalName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="businessDBAName" className="mb-2">
                  Business D/B/A Name{" "}
                </Label>
                <Input
                  id="businessDBAName"
                  type="text"
                  placeholder="Works by Jesse DeBenedictis"
                  {...register("businessDBAName")}
                  error={!!errors.businessDBAName}
                />

                {errors.businessDBAName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.businessDBAName.message}
                  </p>
                )}
              </div>
              <div className="lg:col-span-2">
                <Label htmlFor="stateIncorporated" className="mb-2">
                  Business D/B/A Name{" "}
                </Label>
                <Controller
                  name="stateIncorporated"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={`w-full ${
                          errors.stateIncorporated ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select State (MA)" />
                      </SelectTrigger>
                      <SelectContent>
                        {stateIncorporatedOptions?.map((opt: string) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />

                {errors.stateIncorporated && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.stateIncorporated.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="federalTaxID" className="mb-2">
                  Federal Tax ID #{" "}
                </Label>
                <Input
                  id="federalTaxID"
                  type="text"
                  placeholder="42-4368726"
                  {...register("federalTaxID")}
                  error={!!errors.federalTaxID}
                />
                {errors.federalTaxID && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.federalTaxID.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="amountRequested" className="mb-2">
                  Amount Requested{" "}
                </Label>
                <Input
                  id="amountRequested"
                  type="number"
                  placeholder="5002000"
                  {...register("amountRequested")}
                  error={!!errors.amountRequested}
                />

                {errors.amountRequested && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.amountRequested.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="businessAddress" className="mb-2">
                  Business Address{" "}
                </Label>
                <Input
                  id="businessAddress"
                  type="text"
                  placeholder="60 Park St"
                  {...register("businessAddress")}
                  error={!!errors.businessAddress}
                />

                {errors.businessAddress && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.businessAddress.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="city" className="mb-2">
                  City{" "}
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Beverly"
                  {...register("city")}
                  error={!!errors.city}
                />

                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>

              <div className="lg:col-span-2">
                <Label htmlFor="state" className="mb-2">
                  State{" "}
                </Label>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={`w-full ${
                          errors.state ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select State (MA)" />
                      </SelectTrigger>
                      <SelectContent>
                        {stateOptions?.map((opt: string) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />

                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.state.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="zipCode" className="mb-2">
                  Zip Code{" "}
                </Label>
                <Input
                  id="zipCode"
                  type="text"
                  placeholder="01915"
                  {...register("zipCode")}
                  error={!!errors.zipCode}
                />

                {errors.zipCode && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="businessPhone" className="mb-2">
                  Business Phone #{" "}
                </Label>
                <Input
                  id="businessPhone"
                  type="tel"
                  placeholder="(617) 470-2099"
                  {...register("businessPhone")}
                  error={!!errors.businessPhone}
                />

                {errors.businessPhone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.businessPhone.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="mb-2">Business Start Date </Label>
                <Controller
                  name="businessStartDate"
                  control={control}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger className={`w-full`} asChild>
                        <Button
                          variant="outline"
                          className={`!flex !items-center !justify-between w-full h-11 hover:bg-white ${
                            errors.businessStartDate
                              ? "!border-red-500 !focus:ring-red-500 ring-red-500"
                              : ""
                          }`}
                        >
                          {field.value ? (
                            formatDate(field.value)
                          ) : (
                            <span className="text-gray-400">
                              Pick start date
                            </span>
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
                          selected={field.value}
                          onSelect={field.onChange}
                          className="w-full"
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.businessStartDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.businessStartDate.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="industryType" className="mb-2">
                  Industry Type{" "}
                </Label>
                <Input
                  id="industryType"
                  type="text"
                  placeholder="Construction Residentials"
                  {...register("industryType")}
                  error={!!errors.industryType}
                />

                {errors.industryType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.industryType.message}
                  </p>
                )}
              </div>

              <div className="lg:col-span-1">
                <Label htmlFor="typeOfEntity" className="mb-2">
                  Type of Entity{" "}
                </Label>
                <Controller
                  name="typeOfEntity"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={`w-full ${
                          errors.typeOfEntity ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Sole Proprietors" />
                      </SelectTrigger>
                      <SelectContent>
                        {typeOfEntityOptions?.map((opt: string) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />

                {errors.typeOfEntity && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.typeOfEntity.message}
                  </p>
                )}
              </div>

              <div className="lg:col-span-1">
                <Label htmlFor="useOfFunds" className="mb-2">
                  Use of Funds{" "}
                </Label>
                <Controller
                  name="useOfFunds"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={`w-full ${
                          errors.useOfFunds ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Equipment" />
                      </SelectTrigger>
                      <SelectContent>
                        {useOfFundsOptions?.map((opt: string) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />

                {errors.useOfFunds && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.useOfFunds.message}
                  </p>
                )}
              </div>

              <div className="lg:col-span-2">
                <Label htmlFor="annualRevenue" className="mb-2">
                  Annual Revenue{" "}
                </Label>
                <Controller
                  name="annualRevenue"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={`w-full ${
                          errors.annualRevenue ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Equipment" />
                      </SelectTrigger>
                      <SelectContent>
                        {stateIncorporatedOptions?.map((opt: string) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />

                {errors.annualRevenue && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.annualRevenue.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="homeBasedBusiness" className="mb-2">
                  Home Based Business{" "}
                </Label>
                <Controller
                  name="homeBasedBusiness"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex border-red-500"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="homeBasedBusinessYes" />
                        <Label htmlFor="homeBasedBusinessYes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="homeBasedBusinessNo" />
                        <Label htmlFor="homeBasedBusinessNo">No</Label>
                      </div>
                    </RadioGroup>
                  )}
                />

                {errors.homeBasedBusiness && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.homeBasedBusiness.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="acceptsCreditCards" className="mb-2">
                  Does Business Accept Credit Cards?{" "}
                </Label>
                <Controller
                  name="acceptsCreditCards"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="Yes"
                          id="acceptsCreditCardsYes"
                        />
                        <Label htmlFor="acceptsCreditCardsYes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="acceptsCreditCardsNO" />
                        <Label htmlFor="acceptsCreditCardsNO">No</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
                {errors.acceptsCreditCards && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.acceptsCreditCards.message}
                  </p>
                )}
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
