import Field from "../../../ui/Field/Field";
import Box from "../../../ui/Box/Box";
import styles from "../UserSection.module.scss";
import Positions from "./Positions";
import Title from "../../../ui/Title/Title";
import UploadField from "../UploadField";
import Button from "../../../ui/Button/Button";
import usePositions from "../usePositions";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserAuthFormFieldsType } from "../../../../types/user.types";
import { UserAuthFormSchema } from "../../../../helpers/validation/user.schema";
import { useActions } from "../../../../hooks/useActions";

const UserAuthForm = () => {
  const { positions } = usePositions();

  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, name, phone },
      isValid,
    },
    control,
  } = useForm<UserAuthFormFieldsType>({
    mode: "onChange",
    resolver: zodResolver(UserAuthFormSchema),
  });

  const { addUser } = useActions();
  const onSubmit: SubmitHandler<UserAuthFormFieldsType> = (
    data: UserAuthFormFieldsType
  ) => {
    addUser(data);
  };

  return (
    <Box type="vert" className={styles.user_auth_form_container} id="signup">
      <Title className="h-primary-black" tag="h2">
        Working with POST request
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box type="vert">
          <Field
            type="text"
            placeholder="Your name"
            error={name?.message}
            register={register}
            name={"name"}
          />
          <Field
            type="email"
            placeholder="Email"
            error={email?.message}
            register={register}
            name={"email"}
          />
          <Field
            type="text"
            placeholder="Phone"
            hint="+38 (XXX) XXX - XX - XX"
            error={phone?.message}
            register={register}
            name={"phone"}
          />
          <Positions
            positions={positions}
            register={register}
          />
          <Controller
            name="file"
            control={control}
            defaultValue=""
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <UploadField
                value={value.name}
                onChange={onChange}
                error={error?.message}
              />
            )}
          />
          <Button
            className={isValid ? "btn-primary" : "btn-primary-disabled"}
            type="submit"
          >
            <span>Sign Up</span>
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserAuthForm;
