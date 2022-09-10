import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { LayoutAuthentication } from "~/layouts";
import { useToggleValue } from "~/hooks";
import { Account, ButtonGoogle, Label, Input, Button } from "@/auth";
import { FormGroup} from "@/common";

import TogglePassword from "@/toggle/TogglePassword";
import Checkbox from "@/checkbox/Checkbox";

const schame = Yup.object({
  fullname: Yup.string().required("Please enter your full name"),
  // email: Yup.string().email().required("Email is required"),
  email: Yup.string()
    .required("Please enter your emaill address")
    .matches(
      // eslint-disable-next-line no-control-regex
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      { message: "Please enter valid email address" }
    ),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be 8 characters"),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schame),
    mode: "onSubmit",
  });
  const navigate = useNavigate();
  const handleSignIn = (values) => {
    //if (!isValid) return; // isValid has a problem to deal with later
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("TCL: handleSignIn -> values", values);
        toast.success("Register success! Please confirm in email", {
          delay: 50,
          draggable: true,
          pauseOnHover: false,
        });
        navigate("/login");
      }, 2000);
    });
  };
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="Sign up" title="Sign up">
      <Account pagraph="Already have an account?" span="Sign in" to="/login" />
      <ButtonGoogle>Sign up with google</ButtonGoogle>
      <p className="mb-5 text-center text-xs text-grayScale-c3 dark:text-grayScale-c4 lg:text-sm">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="fullname">Full Name*</Label>
          <Input
            control={control}
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Jhon Doe"
            error={errors.fullname?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email*</Label>
          <Input
            control={control}
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password*</Label>
          <Input
            control={control}
            id="password"
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <TogglePassword
              open={showPassword}
              onClick={handleTogglePassword}
            />
          </Input>
        </FormGroup>
        <div className="mb-5 flex items-start gap-x-5">
          <Checkbox
            id="term"
            name="term"
            checked={acceptTerm}
            onClick={handleToggleTerm}
            control={control}
          >
            <p className="text-text2 dark:text-text3 flex-1 select-none text-xs leading-relaxed transition-all dark:text-white lg:text-sm">
              I agree to the
              <Link to="/" className="font-medium text-primary-blue underline">
                {" "}
                Terms of Use
              </Link>{" "}
              and have read and understand the
              <Link to="/" className="font-medium text-primary-blue underline">
                {" "}
                Privacy policy.
              </Link>
            </p>
          </Checkbox>
        </div>
        <Button disabled={isSubmitting || !acceptTerm} isLoading={isSubmitting}>
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
