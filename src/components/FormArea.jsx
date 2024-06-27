import React from "react";
import { useForm } from "react-hook-form";
import "../css/formArea.css";

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

const FormArea = ({ formData, setFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: initialValues,
    mode: "onChange",
  });

  const onSubmit = (event) => {
    setFormData(event);
    console.log("Form submitted: ", event);
    reset();
  };

  const handleClear = () => {
    setFormData(initialValues);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="input-area">
          <label>
            First Name:{" "}
            <input
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </label>
        </div>
        <div className="input-area">
          <label>
            Last Name:{" "}
            <input
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </label>
        </div>
        <div className="input-area">
          <label>
            Email:{" "}
            <input {...register("ePosta", { required: "Email is required" })} />
            {errors.ePosta && <p>{errors.ePosta.message}</p>}
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              {...register("box", { required: "Box is required" })}
            />
            {errors.box && <p>{errors.box.message}</p>}
            <input
              type="checkbox"
              {...register("box2", { required: "Box2 is required" })}
            />
            <input
              type="checkbox"
              {...register("box3", { required: "Box3 is required" })}
            />
            <input
              type="checkbox"
              {...register("box4", { required: "Box4 is required" })}
            />
          </label>
        </div>
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormArea;
