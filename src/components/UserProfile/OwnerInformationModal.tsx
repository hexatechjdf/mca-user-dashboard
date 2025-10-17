import Input from "../form/input/InputField";
import Label from "../form/Label";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalenderIcon } from "../../icons";
import { Calendar } from "../ui/calendar";
import { Controller } from "react-hook-form";
import ModalHeader from "./ModalHeader";

export default function OwnerInformationModal({ ...props }) {
  const {
    isOpen,
    closeModal,
    register,
    handleSubmit,
    errors,
    handleSave,
    formatDate,
    control,
  } = props;
  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-hidden rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <ModalHeader
          title=" Edit Owner Information"
          description=" Update your owner details below."
        />
        <form onSubmit={handleSubmit(handleSave)} className="flex flex-col">
          <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
              <div>
                <Label htmlFor="firstName" className="mb-2">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter first name"
                  error={!!errors.firstName}
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="lastName" className="mb-2">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter last name"
                  error={!!errors.lastName}
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="ssn" className="mb-2">
                  SSN
                </Label>
                <Input
                  id="ssn"
                  type="text"
                  placeholder="Enter SSN"
                  error={!!errors.ssn}
                  {...register("ssn")}
                />
                {errors.ssn && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.ssn.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="mb-2">Date of Birth </Label>
                <Controller
                  name="dateOfBirth"
                  control={control}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`!flex !items-center !justify-between w-full h-11 hover:bg-white ${
                            errors.dateOfBirth
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

              <div className="md:col-span-2">
                <Label htmlFor="businessOwnership" className="mb-2">
                  Business Ownership
                </Label>
                <Input
                  id="businessOwnership"
                  type="number"
                  placeholder="Enter business ownership"
                  error={!!errors.businessOwnership}
                  {...register("businessOwnership")}
                />
                {errors.businessOwnership && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.businessOwnership.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="cellPhone" className="mb-2">
                  Cell Phone
                </Label>
                <Input
                  id="cellPhone"
                  type="tel"
                  placeholder="Enter cell phone number"
                  error={!!errors.cellPhone}
                  {...register("cellPhone")}
                />
                {errors.cellPhone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cellPhone.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="mb-2">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  error={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="homeAddress" className="mb-2">
                  Home Address
                </Label>
                <Input
                  id="homeAddress"
                  type="text"
                  placeholder="Enter home address"
                  error={!!errors.homeAddress}
                  {...register("homeAddress")}
                />
                {errors.homeAddress && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.homeAddress.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="city" className="mb-2">
                  City
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Enter city"
                  error={!!errors.city}
                  {...register("city")}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="state" className="mb-2">
                  State
                </Label>
                <Input
                  id="state"
                  type="text"
                  placeholder="Enter state"
                  error={!!errors.state}
                  {...register("state")}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.state.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="zipCode" className="mb-2">
                  ZIP Code
                </Label>
                <Input
                  id="zipCode"
                  type="text"
                  placeholder="Enter ZIP code"
                  error={!!errors.zipCode}
                  {...register("zipCode")}
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 mt-6">
            <Button type="button" variant="outline" onClick={closeModal}>
              Close
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
