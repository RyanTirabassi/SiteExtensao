import React from "react";
import pet from "../img/Logo.gif"; // ou pet.gif conforme seu nome
export default function FloatingPet(){
  return (
    <div className="floating-pet">
      <img src={pet} alt="Mascote" style={{ width: "100%", height: "auto", display: "block" }} />
    </div>
  );
}
