import * as yup from "yup";

const strongPasswordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;

export const registerSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(3)
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastname: yup
    .string()
    .min(3)
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      strongPasswordRegex,
      "Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum six in length"
    )
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});
