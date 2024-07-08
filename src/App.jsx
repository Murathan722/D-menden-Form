import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FormArea from "./components/FormArea";
import Click from "./components/Click";
import AnaSayfa from "./components/AnaSayfa";

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

  return (
    <Routes>
      <Route path="/" element={<Click />} />
      <Route
        path="/form"
        element={<FormArea formData={formData} setFormData={setFormData} />}
      />
      <Route path="/Anasayfa" element={<AnaSayfa />} />
    </Routes>
  );
}

export default App;
