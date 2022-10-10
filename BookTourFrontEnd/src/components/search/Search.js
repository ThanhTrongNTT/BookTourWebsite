import React from "react";
import { useForm } from "react-hook-form";
import { IconSearch } from "../icon";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorBoundary } from "../common";

const Search = () => {
  const { register, handleSubmit } = useForm();
  const handleSearch = (value) => console.log(value);
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(handleSearch)}
      className="border-2 flex items-center border-c6 rounded-lg lg:pl-4 pl-2 text-c3 focus-within:border-blue-400 transition-all"
    >
      <input
        type="text"
        placeholder="Search..."
        {...register("search")}
        className="pr-2 bg-transparent lg:text-base text-sm w-full"
      />
      <button className="py-2 px-3 text-c4">
        <IconSearch />
      </button>
    </form>
  );
};

export default withErrorBoundary(Search, {
  FallbackComponent: ErrorBoundary,
});
