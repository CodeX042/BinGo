import { useState } from "react";
import { bingo_backend } from "declarations/bingo_backend";
import { FaBeer } from "react-icons/fa";
import { toast } from "react-toastify";

function Login() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    bingo_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
      toast.success("authenticated");
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-red-500">
          Enter your name: &nbsp; <FaBeer />
        </label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default Login;
