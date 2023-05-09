import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const registrationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Required")
    .min(3, "UserName must be atleast 3 characters long"),
  email: yup
    .string()
    .required("Required")
    .email("Please enter a valid email address"),
  age: yup
    .number("It must be a number")
    .nullable()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    })
    .positive()
    .integer()
    .min(18, "Must be at least 18 years old")
    .required("Required"),
  gender: yup.string().oneOf(["Male", "Female", "Other"]).required("Required"),
  jobTitle: yup
    .string()
    .required("Required")
    .oneOf(
      ["QA", "SEO", "softwareEngineer", "contentWriter", "graphic"],
      "Please select a job title"
    ),
  password: yup
    .string()
    .required("Required")
    .min(5, "Minimum 5 characters required")
    .matches(passwordRules, "Please create a stronger password"),
  confirmPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Password must match"),
  terms: yup.boolean().oneOf([true], "Please accept the terms and conditions"),
});
