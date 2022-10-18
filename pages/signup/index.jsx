import { useState } from "react";

import SignUp from "@/components/authentication/signup/SignUp";
import CreateAccount from "@/components/authentication/signup/CreateAccount"

export default function Signup() {
  const [selected, setSelected] = useState(null);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phoneNo: "",
    email: "",
    password: ""
  });

  const next = () => {
    if (selected < 4 || selected === null) {
      setSelected((prev) => {
        return prev + 1;
      });
    }
  };

  const back = () => {
    if (selected > 0) {
      if (selected === 1) {
        setSelected(null);
      } else {
        setSelected((prev) => {
          return prev - 1;
        });
      }
    }
  };

  return (
    <div>
      {selected === null ? (
        <SignUp next={next} setUser={setUser} user={user} />
      ) : (
        ""
      )}
      {selected === 1 ? (
        <CreateAccount back={back} user={user} setUser={setUser} />
      ) : ("")}
    </div>
  )
}