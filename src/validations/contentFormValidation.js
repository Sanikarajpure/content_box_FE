import * as yup from "yup";

export const contentFormSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, "Title should be at least 3 characters")
    .required("Title is required"),
  description: yup
    .string()
    .min(4, "Description must be at least 5 characters")
    .required("description is Required"),
  linkToContent: yup.string().url().required("Link to content is Required"),
});
