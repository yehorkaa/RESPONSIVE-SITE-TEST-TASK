import { any, string, z } from "zod";
import { EMPTY_ERR, MIN_IMG_SIZE, MIN_RESOLUTION } from "../constants";

export const UserAuthFormSchema = z.object({
  name: string({
    required_error: EMPTY_ERR,
  })
    .min(2, { message: "This field must contain at least two characters" })
    .max(60, { message: "This field must contain less then 60 characters" }),
  email: string().email({ message: "Invalid email address" }),
  phone: string().regex(/^(\+380)[0-9]{9}$/, {
    message: "Invalid phone number",
  }),
  position: string(),
  file: any()
    .refine(
      (file) => {
        return file.size < MIN_IMG_SIZE;
      },
      { message: `Max image size is 5MB.` }
    )
    .refine(
      (file) => {
        return new Promise((resolve) => {
          if (file) {
            const objectURL = URL.createObjectURL(file);
            const img = new Image();

            img.onload = function handleLoad() {
              URL.revokeObjectURL(objectURL);

              if (img.width >= MIN_RESOLUTION && img.height >= MIN_RESOLUTION) {
                resolve(true);
              } else {
                resolve(false);
              }
            };

            img.src = objectURL;
          } else {
            resolve(false);
          }
        });
      },
      { message: `Image resolution should be at least 70x70.` }
    ),
});
