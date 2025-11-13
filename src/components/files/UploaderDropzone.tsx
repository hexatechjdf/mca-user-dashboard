import React from "react";
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "./Dropzone";


interface UploaderDropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
  files?: File[];
  mainTitle?: string;
  descrption?: string;
}

const UploaderDropzone: React.FC<UploaderDropzoneProps> = ({
  onDrop,
  files,
  mainTitle,
  descrption,
}) => {
  return (
    <Dropzone
      accept={{ "image/*": [] }}
      maxFiles={10}
      maxSize={1024 * 1024 * 10}
      minSize={1024}
      onDrop={onDrop}
      onError={console.error}
      src={files}
      className="transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500"
    >
      <DropzoneEmptyState mainTitle={mainTitle} descrption={descrption} />
      <DropzoneContent />
    </Dropzone>
  );
};

export default UploaderDropzone;
