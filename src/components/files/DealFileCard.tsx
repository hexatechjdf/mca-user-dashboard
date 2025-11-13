import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import FileList from "../files/FileList";
import UploaderDropzone from "../files/UploaderDropzone";
import { useState } from "react";
import { DealFileCardProps, FileItem } from "../../types/profile";

const DealFileCard = ({
  showTabs = true,
  tabItems = [],
  files = [],
  onDrop,
}: DealFileCardProps) => {
  const [activeFiles, setActiveFiles] = useState<Record<string, FileItem[]>>(
    () => {
      const initialFiles: Record<string, FileItem[]> = {};
      tabItems.forEach((tab) => {
        initialFiles[tab.value] = tab.files || [];
      });
      return initialFiles;
    }
  );

  const handleFileDrop = (
    files: File[],
    tabValue: string,
    fileType: "original" | "watermarked" | "short" = "original"
  ) => {
    const newFiles: FileItem[] = files.map((file) => ({
      name: file.name,
      date: new Date().toISOString().split("T")[0],
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      type: fileType,
      url: URL.createObjectURL(file),
    }));

    setActiveFiles((prev) => ({
      ...prev,
      [tabValue]: [...(prev[tabValue] || []), ...newFiles],
    }));

    const tab = tabItems.find((t) => t.value === tabValue);
    if (tab?.onDrop) {
      tab.onDrop(files, fileType);
    }
  };

  const filterFilesByType = (
    files: FileItem[],
    type: "original" | "watermarked" | "short"
  ) => {
    return files.filter((file) => file.type === type);
  };

  const getSubTabsConfig = (tabValue: string) => {
    if (tabValue === "applications") {
      return [
        { value: "original", label: "Original" },
        { value: "watermarked", label: "Watermarked" },
        { value: "short", label: "Short" },
      ];
    } else if (tabValue === "bankStatement") {
      return [
        { value: "original", label: "Original" },
        { value: "watermarked", label: "Watermarked" },
      ];
    }
    return [];
  };

  return (
    <div className="p-5 border border-gray-200 rounded-2xl flex flex-col">
      <h4 className="text-lg font-semibold text-primary dark:text-white/90 mb-6">
        All Documents{" "}
      </h4>

      <div className="flex flex-col flex-1 min-h-[300px]">
        {showTabs ? (
          <Tabs
            defaultValue={tabItems[0]?.value}
            className="flex flex-col flex-1"
          >
            <TabsList className="w-full justify-between bg-transparent border border-gray-200">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:bg-brand-500 data-[state=active]:text-white w-full"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabItems.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="flex flex-col flex-1"
              >
                {tab.showSubTabs ? (
                  <Tabs
                    defaultValue="original"
                    className="flex flex-col flex-1"
                  >
                    <TabsList className="w-full justify-between mb-4 px-30 bg-transparent border border-gray-200">
                      {getSubTabsConfig(tab.value).map((subTab) => (
                        <TabsTrigger
                          key={subTab.value}
                          value={subTab.value}
                          className="data-[state=active]:bg-brand-500 data-[state=active]:text-white w-full"
                        >
                          {subTab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {getSubTabsConfig(tab.value).map((subTab) => (
                      <TabsContent
                        key={subTab.value}
                        value={subTab.value}
                        className="flex flex-col flex-1"
                      >
                        <div className="flex flex-col flex-1">
                          <div className="flex-1 overflow-y-auto mb-4">
                            <FileList
                              files={filterFilesByType(
                                activeFiles[tab.value] || [],
                                subTab.value as
                                  | "original"
                                  | "watermarked"
                                  | "short"
                              )}
                            />
                          </div>
                          <div className="pt-2">
                            <UploaderDropzone
                              mainTitle={`Drop ${subTab.label} Files here or Click to upload`}
                              onDrop={(files) =>
                                handleFileDrop(
                                  files,
                                  tab.value,
                                  subTab.value as
                                    | "original"
                                    | "watermarked"
                                    | "short"
                                )
                              }
                            />
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                ) : (
                  <div className="flex flex-col flex-1">
                    <div className="flex-1 overflow-y-auto mb-4">
                      <FileList files={activeFiles[tab.value] || []} />
                    </div>
                    <div className="pt-2">
                      <UploaderDropzone
                        mainTitle="Drop Files here or Click to upload"
                        onDrop={(files) => handleFileDrop(files, tab.value)}
                      />
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="flex flex-col flex-1">
            <div className="flex-1 overflow-y-auto">
              <FileList files={files} />
            </div>
            <div className="pt-2">
              <UploaderDropzone
                mainTitle="Drop Files here or Click to upload"
                onDrop={onDrop || (() => {})}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealFileCard;
