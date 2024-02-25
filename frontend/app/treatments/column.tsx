import { Chip, Tooltip } from "@nextui-org/react";
import { EyeIcon } from "../components/icon";
import React from "react";

export type Treatment = {
  id: string;
  patientName: string;
  patientId: string; // Numeric or Alphanumeric
  dateOfTreatment: string; // Date (ISO 8601 format)
  treatmentDescription: string[]; // Array of Strings
  medicationsPrescribed: string[]; // Array of Strings
  costOfTreatment: number; // Float/Decimal
};

export const columns = [
  {
    key: "patientId",
    label: "Patient ID",
  },
  {
    key: "patientName",
    label: "Patient Name",
  },
  {
    key: "dateOfTreatment",
    label: "Date of Treatment",
  },
  {
    key: "treatmentDescription",
    label: "Treatment Description",
  },
  {
    key: "medicationsPrescribed",
    label: "Medications Prescribed",
  },
  {
    key: "costOfTreatment",
    label: "Cost of Treatment",
  },
  // {
  //   key: "actions",
  //   label: "Action",
  // },
];

export const renderCell = (treatment:Treatment, columnKey:React.Key) => {
  const cellValue = treatment[columnKey as keyof Treatment];

  switch (columnKey) {
    case "treatmentDescription":
      return (
        treatment.treatmentDescription.map((desc, index) => (
          <Chip key={index} variant="bordered" radius="sm" className="mr-1" size="sm">
            {desc}
          </Chip>
        ))
      );
    case "medicationsPrescribed":
      return (
        treatment.medicationsPrescribed.map((med, index) => (
          <Chip key={index} variant="bordered" radius="sm" className="mr-1" size="sm">
            {med}
          </Chip>
        ))
      );
    case "actions":
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Details">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EyeIcon />
            </span>
          </Tooltip>
        </div>
      );
    default:
      return cellValue;
  }
}