import { FileItem } from "../../types/profile";
import DealFileCard from "./DealFileCard";
import { useMemo } from "react";
export const AllDocuments = ({ data }: any) => {
  const documents = data?.data?.documents || [];

  const categorizedDocs = useMemo(() => {
    const applications: FileItem[] = [];
    const bankStatements: FileItem[] = [];
    const others: FileItem[] = [];

    documents.forEach((doc: any) => {
      const item: FileItem = {
        name: `${doc.type}_${doc.id}.pdf`,
        date: new Date(doc.created_at).toISOString().split("T")[0],
        url: doc.url,
        type: doc.visibility_type as FileItem["type"],
      };

      if (doc.type === "application") applications.push(item);
      else if (doc.type === "bankstatement") bankStatements.push(item);
      else others.push(item);
    });

    return { applications, bankStatements, others };
  }, [documents]);

  const tabItems = [
    {
      value: "applications",
      label: "Applications",
      files: categorizedDocs.applications,
      onDrop: (files: File[], fileType: FileItem["type"]) =>
        console.log("Application files dropped:", files, "Type:", fileType),
      showSubTabs: true,
    },
    {
      value: "bankStatement",
      label: "Bank Statement",
      files: categorizedDocs.bankStatements,
      onDrop: (files: File[], fileType: FileItem["type"]) =>
        console.log("Bank files dropped:", files, "Type:", fileType),
      showSubTabs: true,
    },
    {
      value: "other",
      label: "Other Documents",
      files: categorizedDocs.others,
      onDrop: (files: File[], fileType: FileItem["type"]) =>
        console.log("Other files dropped:", files, "Type:", fileType),
      showSubTabs: false,
    },
  ];

  return (
    <div className="grid gap-6">
      <DealFileCard showTabs={true} tabItems={tabItems} />
    </div>
  );
};
