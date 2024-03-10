import { useRef, ChangeEvent } from "react";

const useFile = (onChange: (e: File) => void) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      onChange(files[0]);
    }
  };

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  return { handleFileUpload, handleClick, fileInput };
};

export default useFile;
