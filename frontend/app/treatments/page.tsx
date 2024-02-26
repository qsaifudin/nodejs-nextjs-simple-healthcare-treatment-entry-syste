"use client";
import { useEffect, useState } from "react";
import { Treatment } from "./column";
import { TreatmentTable } from "./TreatmentTable";

export default function Treatments() {
  const [isLoading, setIsLoading] = useState(true);

  async function getTreatment() {
    setIsLoading(true);
    fetch("http://localhost:5000/api/form", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        console.log("🚀 ~ getTreatment ~ data:", data);
        setTreatment(data.data);
        setIsLoading(false);
      });
  }
  const [treatment, setTreatment] = useState<Treatment[]>([]);

  useEffect(() => {
    getTreatment();
  }, []);

  async function updateTreatmentData() {
    await getTreatment();
  }

  return (
    <TreatmentTable
      treatment={treatment}
      updateTreatmentData={updateTreatmentData}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />
  );
}
