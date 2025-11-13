import React from "react";
import { FileText, Eye } from "lucide-react";

interface FileData {
  name: string;
  date?: string;
  size?: string;
  url?: string;
}

interface FileListProps {
  files: FileData[];
}

const FileList: React.FC<FileListProps> = ({ files }) => {
  const handleOpen = (url?: string) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col justify-end flex-1">
      {files.map((file, idx) => (
        <div
          key={idx}
          className="border border-gray-200 dark:border-white/10 mb-2 p-[11px] rounded-[6px] flex items-center justify-between gap-2 transition hover:bg-[rgba(222,222,222,0.1)] dark:hover:bg-white/5"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <FileText className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>

            <div>
              <h3 className="text-xs leading-normal text-gray-500 dark:text-gray-400 mb-1 truncate">
                {file.name}
              </h3>
              <p className="text-xs font-medium text-primary dark:text-white/90">
                {file.date} {file.size && `• ${file.size}`}
              </p>
            </div>
          </div>

          {file.url && (
            <button
              onClick={() => handleOpen(file.url)}
              className="text-gray-500 hover:text-primary transition"
              title="Preview"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default FileList;
