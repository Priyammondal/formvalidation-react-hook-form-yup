import React from "react";
import { useForm } from "react-hook-form";
import { registrationSchema } from "./schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import toast from "react-hot-toast";

const App = () => {
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(registrationSchema),
  });
  const submit = (data) => {
    console.log(data);
    toast.success("Form submitted successfully");
    reset();
  };
  return (
    <form
      className="container min-vh-100 d-flex gap-3 justify-content-center align-items-center flex-column"
      style={{ background: "#CBDAE9" }}
      onSubmit={handleSubmit(submit)}
    >
      <h1 className="border-bottom border-dark pb-2">Registration</h1>
      <div>
        <label htmlFor="name">Full Name</label>
        <div className="w-75">
          <input
            className="form-control"
            id="name"
            type="text"
            autoComplete="off"
            placeholder="Enter full name"
            {...register("fullName")}
          />
          {formState.errors.fullName ? (
            <p className="text text-danger">
              {formState.errors.fullName?.message}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <div className="w-75">
          <input
            className="form-control"
            id="email"
            type="email"
            autoComplete="off"
            placeholder="Enter your email address"
            {...register("email")}
          />
          {formState.errors.email ? (
            <p className="text text-danger">
              {formState.errors.email?.message}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <div className="w-75">
          <input
            className="form-control"
            id="age"
            type="number"
            autoComplete="off"
            placeholder="Enter age"
            {...register("age")}
          />
          {formState.errors.age ? (
            <p className="text text-danger">{formState.errors.age?.message}</p>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="">Gender</label>
        <div className="w-75">
          <span>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="inlineRadio1"
                value="Male"
                {...register("gender")}
              />
              <label className="form-check-label" for="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                value="Female"
                {...register("gender")}
              />
              <label className="form-check-label" for="female">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="other"
                value="Other"
                {...register("gender")}
              />
              <label className="form-check-label" for="other">
                Other
              </label>
            </div>
          </span>
          {formState.errors.gender ? (
            <p className="text text-danger">
              {formState.errors.gender?.message}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="jobtitle">Job Title</label>
        <div className="w-75">
          <select
            id="jobtitle"
            className="form-control"
            {...register("jobTitle")}
          >
            <option value="">Select One</option>
            <option value="QA">Quality Analyst</option>
            <option value="SEO">SEO Executive</option>
            <option value="softwareEngineer">Software Engineer</option>
            <option value="contentWriter">Content Writer</option>
            <option value="graphic">Graphic Designer</option>
          </select>
          {formState.errors.jobTitle ? (
            <p className="text text-danger">
              {formState.errors.jobTitle?.message}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div className="w-75">
          <input
            className="form-control"
            id="password"
            type="password"
            autoComplete="off"
            placeholder="Enter your password"
            {...register("password")}
          />
          {formState.errors.password ? (
            <p className="text text-danger">
              {formState.errors.password?.message}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="confirm_password">Confirm Password</label>
        <div className="w-75">
          <input
            className="form-control"
            id="confirm_password"
            type="password"
            autoComplete="off"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {formState.errors.confirmPassword ? (
            <p className="text text-danger">
              {formState.errors.confirmPassword?.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form-check">
        <section>
          <input
            className="form-check-input"
            type="checkbox"
            id="terms"
            {...register("terms")}
          />
          <label className="form-check-label ms-3" for="flexCheckDefault">
            I have read and agree to the Terms and Conditions​
          </label>
          {formState.errors.terms ? (
            <p className="text text-danger">
              {formState.errors.terms?.message}
            </p>
          ) : null}
        </section>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default App;
