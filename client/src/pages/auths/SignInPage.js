import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { LayoutAuthentication } from "~/layouts";
import { useToggleValue } from "~/hooks";
import { Account, ButtonGoogle, Label, Input, Button } from "@/auth";
import { FormGroup, ForgotPassword } from "@/common";
import TogglePassword from "@/toggle/TogglePassword";

const schame = Yup.object({
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

const SignInPage = () => {
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
    // if (!isValid) return; isValid has a problem to deal with later
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("TCL: handleSignIn -> values", values);
        toast.success("Login success!", {
          delay: 50,
          draggable: true,
          pauseOnHover: false,
        });
        navigate("/");
      }, 2000);
    });
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    console.log("TCL: SignInPage -> arrErrors", arrErrors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        draggable: true,
        delay: 50,
      });
    }
  }, [errors]);

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="Wellcome back" title="Sign in">
      <Account pagraph={`Don't have account?`} span="Sign up" to="/register" />
      <ButtonGoogle>Sign in with google</ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
            placeholder="Enter your password"
            error={errors.password?.message}
          >
            <TogglePassword
              open={showPassword}
              onClick={handleTogglePassword}
            />
          </Input>
        </FormGroup>
        <ForgotPassword to="/forgot-password" />
        <Button disabled={isSubmitting} isLoading={isSubmitting}>
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
