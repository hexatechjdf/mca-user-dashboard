"use client";

import React, { useCallback, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { UploadCloud, ImageIcon, FileIcon } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------- TYPES ----------
interface DropzoneProps {
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  minSize?: number;
  onDrop: (acceptedFiles: File[]) => void;
  onError?: (error: any) => void;
  src?: File[];
  className?: string;
  children?: React.ReactNode;
}

interface DropzoneEmptyStateProps {
  mainTitle?: string;
  descrption?: string;
}

interface DropzoneContentProps {
  files?: File[];
}

// ---------- MAIN COMPONENT ----------
export const Dropzone: React.FC<DropzoneProps> = ({
  accept,
  maxFiles = 10,
  maxSize = 1024 * 1024 * 10,
  minSize = 1024,
  onDrop,
  onError,
  src,
  className,
  children,
}) => {
  const [rejected, setRejected] = useState<FileRejection[]>([]);

  const handleDrop = useCallback(
    (accepted: File[], rejected: FileRejection[]) => {
      if (rejected.length > 0) {
        setRejected(rejected);
        onError?.(rejected);
      }
      if (accepted.length > 0) {
        onDrop(accepted);
      }
    },
    [onDrop, onError]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept,
    maxFiles,
    maxSize,
    minSize,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer transition hover:border-primary/70 hover:bg-muted/30",
        isDragActive && "border-primary bg-muted/30",
        className
      )}
    >
      <input {...getInputProps()} />
      {children ? (
        children
      ) : (
        <>
          <UploadCloud className="h-10 w-10 text-gray-500 mb-2" />
          <p className="text-sm text-gray-600">
            {isDragActive
              ? "Drop files here..."
              : "Drag & drop or click to upload"}
          </p>
        </>
      )}
      {src && src.length > 0 && <DropzoneContent files={src} />}
    </div>
  );
};

// ---------- EMPTY STATE ----------
export const DropzoneEmptyState: React.FC<DropzoneEmptyStateProps> = ({
  mainTitle = "Drop Files here or Click to upload",
  descrption = "Supported formats: PNG, JPG, PDF, DOCX, etc.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 mb-3">
      <UploadCloud className="h-10 w-10 text-gray-500" />
      <p className="text-sm font-medium text-gray-700">{mainTitle}</p>
      {descrption && <p className="text-xs text-gray-500">{descrption}</p>}
    </div>
  );
};

// ---------- FILE LIST CONTENT ----------
export const DropzoneContent: React.FC<DropzoneContentProps> = ({
  files = [],
}) => {
  return (
    <div className="w-full mt-3 flex flex-col gap-2">
      {files.map((file, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between border border-gray-200 rounded-lg p-2 text-sm"
        >
          <div className="flex items-center gap-2 overflow-hidden">
            {file.type.startsWith("image/") ? (
              <ImageIcon className="h-4 w-4 text-blue-500" />
            ) : (
              <FileIcon className="h-4 w-4 text-gray-500" />
            )}
            <span className="truncate">{file.name}</span>
          </div>
          <span className="text-gray-400 text-xs">
            {(file.size / 1024).toFixed(1)} KB
          </span>
        </div>
      ))}
    </div>
  );
};
