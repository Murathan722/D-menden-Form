import React, { useState } from "react";
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
    setValue,
  } = useForm({
    defaultValues: initialValues,
    mode: "onChange",
  });

  const [selectedAge, setSelectedAge] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleAgeSelect = (age) => {
    setSelectedAge(age);
    setValue("Yaş", age, { shouldValidate: true });
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const onSubmit = (data) => {
    const updatedData = { ...data, Yaş: selectedAge };
    setFormData(updatedData);
    console.log("Form submitted: ", updatedData);
    reset();
    setSelectedAge(null);
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
              {...register("lastName", {
                required: "Last name is required",
              })}
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
        <div className="input-area">
          <label>
            Telefon:{" "}
            <input
              {...register("Telefon", {
                required: "Telefon is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number. Must be 10 digits.",
                },
              })}
            />
            {errors.Telefon && <p>{errors.Telefon.message}</p>}
          </label>
        </div>
        <div className="input-area">
          <label>
            Yaş:{" "}
            <div className="dropdown" onClick={toggleDropdown}>
              <button type="button" className="dropdown-button">
                {selectedAge || "Yaş Seçin"}
              </button>
              {isOpen && (
                <div className="dropdown-content">
                  {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
                    <div
                      key={age}
                      className="dropdown-item"
                      onClick={() => handleAgeSelect(age)}
                    >
                      {age}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {!selectedAge && errors.Yaş && <p>Yaş is required</p>}
          </label>
        </div>
        <button
          type="submit"
          disabled={!isValid || !selectedAge}
          className="submit-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormArea;
