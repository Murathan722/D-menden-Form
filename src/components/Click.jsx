import { useNavigate } from "react-router-dom";

export default function Click() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };
  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
