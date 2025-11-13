import { useModal } from "../../hooks/useModal";
import Label from "../form/Label";
import { format } from "date-fns";
import { toast } from "react-toastify";
import OwnerInformationModal from "./OwnerInformationModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { OwnerInformationSchema } from "../schema";
import React from "react";
import { OwnerInformationFormData } from "../../types/profile";

export default function OwnerInformation({ data }: any) {
  const { isOpen, openModal, closeModal } = useModal();

  const [updateFormData, setUpdateFormData] = React.useState<
    OwnerInformationFormData[]
  >([]);
  const contacts = data?.data?.contacts;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<OwnerInformationFormData>({
    resolver: yupResolver(OwnerInformationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      ssn: "",
      dateOfBirth: "",
      businessOwnership: "",
      cellPhone: "",
      homeAddress: "",
      city: "",
      state: "",
      zipCode: "",
      email: "",
    },
  });

  const handleSave = (data: OwnerInformationFormData) => {
    try {
      const newEntity = { id: Date.now(), ...data };
      setUpdateFormData((prev) => [...prev, newEntity]);
      toast.success("Added Successfully ✅");
      console.log("All saved data:", [...updateFormData, newEntity]);
      reset();
      closeModal();
    } catch {
      toast.error("Failed to add ❌");
    }
  };

  const formatDate = (date: Date) => (date ? format(date, "MMM d, yyyy") : "");

  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h4 className="text-lg font-semibold text-primary dark:text-white/90 lg:mb-6">
            Owner Informations{" "}
          </h4>
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

        <div className="w-full mt-2">
          {contacts.length === 0 ? (
            <p className="text-gray-500 text-sm">No records added yet.</p>
          ) : (
            contacts.map((item: string, index: number) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-5 gap-6 border border-gray-200 p-4 rounded-lg mb-4 lg:gap-7 2xl:gap-x-18"
              >
                <div className="col-span-full font-semibold text-primary mb-2">
                  {getOrdinal(index + 1)} Owner Info
                </div>

                {Object.entries(item)
                  .filter(([key]) => key !== "id")
                  .reverse()
                  .map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <Label className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (s) => s.toUpperCase())}
                        :
                      </Label>
                      <p className="text-sm font-medium text-primary dark:text-white/90 break-words">
                        {value ? String(value) : "—"}
                      </p>
                    </div>
                  ))}
              </div>
            ))
          )}
        </div>

        <OwnerInformationModal
          isOpen={isOpen}
          closeModal={closeModal}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          control={control}
          handleSave={handleSave}
          formatDate={formatDate}
        />
      </div>
    </>
  );
}
