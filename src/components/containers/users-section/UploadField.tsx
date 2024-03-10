import { FC } from "react";
import styles from "./UserSection.module.scss";
import Button from "../../ui/Button/Button";
import cn from "classnames";
import useFile from "../../../hooks/useFile";
import { getSlicedString } from "../../../helpers";

const UploadField: FC<{
  value: string;
  onChange: (event: File) => void;
  error?: string;
}> = ({ value, onChange, error, ...rest }) => {
  const { handleClick, handleFileUpload, fileInput } = useFile(onChange);

  return (
    <div className={styles.upload_field}>
      <div
        onClick={handleClick}
        className={cn(
          styles.upload_container,
          error && styles.upload_container_error
        )}
      >
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileUpload}
          accept=".jpeg,.jpg"
          ref={fileInput}
          {...rest}
        />
        <label className={styles.upload_btn}>
          <Button type="button">Upload</Button>
        </label>
        <input
          value={getSlicedString(value, 15)}
          type="text"
          placeholder="Upload your photo"
          disabled
          className={cn(styles.disabled_input)}
        />
      </div>
      {error && <span>{error}</span>}
    </div>
  );
};

export default UploadField;
