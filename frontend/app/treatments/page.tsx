"use client"
import { useEffect, useState } from "react";
import { Treatment } from "./column";
import { TreatmentTable } from "./TreatmentTable";

export default  function Treatments() {
  async function getTreatment() {
    fetch('http://localhost:5000/api/form', { cache: 'no-store' })
    .then(response => response.json())
    .then(data => {
      console.log("🚀 ~ getTreatment ~ data:", data)
      setTreatment(data.data)
    })
  }
  const [treatment, setTreatment] = useState<Treatment[]>([]);

  useEffect(() => {
    getTreatment()
}, [])

async function updateTreatmentData(){
    await getTreatment();
  };

  return <TreatmentTable treatment={treatment} updateTreatmentData={updateTreatmentData}  />;
  
}
