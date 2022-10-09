//import pic from "./James.jpg";
import React, { useState } from "react";
import { createContext } from "react";

export const EmployeesContext = createContext("");

export function EmployeesProvider(props) {
  const [newEmployee] = useState([
    {
      id: 1,
      img: "https://image.shutterstock.com/image-vector/modern-male-avatar-profile-pic-600w-285536795.jpg",
      name: "James King",
      occupation: "President",
      callOffice: "800-567-8888",
      callMobile: "571-567-0001",
      sms: "990-000-0001",
      email: "James@gmail.com",
    },
    {
      id: 2,
      img: "https://image.shutterstock.com/image-vector/avatar-600w-655486639.jpg",
      name: "Julie Tyler",
      occupation: "Marketing",
      callOffice: "800-980-4323",
      callMobile: "571-546-7647",
      sms: "703-222-8655",
      email: "Julie@gmail.com",
    },
    {
      id: 3,
      img: "https://image.shutterstock.com/image-vector/male-face-avatar-on-white-600w-562359640.jpg",
      name: "John Lee",
      occupation: "Manager",
      callOffice: "667-890-3278",
      callMobile: "571-917-2222",
      sms: "777-987-2234",
      email: "John@gmail.com",
    },
    {
      id: 4,
      img: "https://image.shutterstock.com/image-vector/emotion-avatar-man-happy-successful-600w-574201909.jpg",
      name: "Ray Comfort",
      occupation: "Engineer",
      callOffice: "202-777-6999",
      callMobile: "571-678-2358",
      sms: "703-000-0001",
      email: "Ray@gmail.com",
    },
    {
      id: 5,
      img: "https://image.shutterstock.com/image-vector/man-profile-icon-face-seen-600w-387954922.jpg",
      name: "Paul Jones",
      occupation: "VP Sales",
      callOffice: "304-668-9111",
      callMobile: "571-444-5678",
      sms: "511-799-4567",
      email: "Paul@gmail.com",
    },
    {
      id: 6,
      img: "https://image.shutterstock.com/image-vector/female-face-avatar-on-white-600w-559529248.jpg",
      name: "Marta Berry",
      occupation: "QA Manager",
      callOffice: "800-567-9675",
      callMobile: "571-786-5555",
      sms: "573-667-7356",
      email: "Marta@gmail.com",
    },
  ]);
  const [empContext, setEmpContext] = useState("");

  const clickHandler = (id) => {
    console.log("button clicked", id);
    setEmpContext(id);
  };

  return (
    <EmployeesContext.Provider
      value={{
        newEmployee,
        clickHandler,
        empContext,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
}

export default EmployeesContext;
