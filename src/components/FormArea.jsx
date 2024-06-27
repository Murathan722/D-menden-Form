import React from "react";
import { useForm } from "react-hook-form";

const initialValues = {
  firstName: "",
  lastName: "",
  ePosta: "",
  Yaş: "",
  Telefon: "",
  Uyruk: "",
  Mesaj: "",
  Cinsiyet: "",
};

const FormArea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialValues,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setFormData(data);
    console.log("Form submitted: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label>Last Name: </label>
        <input
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Email: </label>
        <input {...register("ePosta", { required: "Email is required" })} />
        {errors.ePosta && <p>{errors.ePosta.message}</p>}
      </div>
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default FormArea;
