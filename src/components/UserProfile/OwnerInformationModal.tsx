import Input from "../form/input/InputField";
import Label from "../form/Label";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalenderIcon } from "../../icons";
import { Calendar } from "../ui/calendar";

export default function OwnerInformationModal({ ...props }) {
  const { isOpen, closeModal, formData, handleChange, handleSave, formatDate } =
    props;
  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-hidden rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-primary dark:text-white/90">
            Edit Owner Information
          </h4>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
            Update your owner details below.
          </p>
        </div>

        <form onSubmit={handleSave} className="flex flex-col">
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
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="lastName" className="mb-2">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="ssn" className="mb-2">
                  SSN
                </Label>
                <Input
                  id="ssn"
                  type="number"
                  placeholder="Enter SSN"
                  value={formData.ssn}
                  onChange={(e) => handleChange("ssn", e.target.value)}
                />
              </div>

              <div>
                <Label className="mb-2">Date of Birth </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="!flex !items-center !justify-between w-full h-11 hover:bg-white"
                    >
                      {formData.dateOfBirth ? (
                        formatDate(formData.dateOfBirth)
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
                      selected={formData.dateOfBirth}
                      onSelect={(date: any) =>
                        handleChange("dateOfBirth", date)
                      }
                      className="w-full"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="businessOwnership" className="mb-2">
                  Business Ownership
                </Label>
                <Input
                  id="businessOwnership"
                  type="number"
                  placeholder="Enter business ownership"
                  value={formData.businessOwnership}
                  onChange={(e) =>
                    handleChange("businessOwnership", e.target.value)
                  }
                />
              </div>

              <div>
                <Label htmlFor="cellPhone" className="mb-2">
                  Cell Phone
                </Label>
                <Input
                  id="cellPhone"
                  type="tel"
                  placeholder="Enter cell phone number"
                  value={formData.cellPhone}
                  onChange={(e) => handleChange("cellPhone", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="email" className="mb-2">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="homeAddress" className="mb-2">
                  Home Address
                </Label>
                <Input
                  id="homeAddress"
                  type="text"
                  placeholder="Enter home address"
                  value={formData.homeAddress}
                  onChange={(e) => handleChange("homeAddress", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="city" className="mb-2">
                  City
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="state" className="mb-2">
                  State
                </Label>
                <Input
                  id="state"
                  type="text"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="zipCode" className="mb-2">
                  ZIP Code
                </Label>
                <Input
                  id="zipCode"
                  type="text"
                  placeholder="Enter ZIP code"
                  value={formData.zipCode}
                  onChange={(e) => handleChange("zipCode", e.target.value)}
                />
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
