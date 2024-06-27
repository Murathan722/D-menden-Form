import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FormArea from "./components/FormArea";
import Click from "./components/Click";

function App() {
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

  const [formData, setFormData] = useState(initialValues);

  console.log(formData);

  return (
    <Routes>
      <Route path="/" element={<Click />} />
      <Route
        path="/form"
        element={<FormArea formData={formData} setFormData={setFormData} />}
      />
    </Routes>
  );
}

export default App;
