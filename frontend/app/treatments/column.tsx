import { Chip, Tooltip } from "@nextui-org/react";
import { DeleteIcon } from "../components/icon";
import React from "react";

export type Treatment = {
  id: string;
  patientName: string;
  patientId: string;
  dateOfTreatment: string;
  treatmentDescription: string[];
  medicationsPrescribed: string[];
  costOfTreatment: number;
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
  {
    key: "actions",
    label: "Action",
  },
];

export const renderCell = (treatment: Treatment, columnKey: React.Key, deleteAction) => {
  const cellValue = treatment[columnKey as keyof Treatment];
  const deleteFromIcon = () => {
    deleteAction(treatment.id);
  };

  switch (columnKey) {
    case "treatmentDescription":
      return treatment.treatmentDescription.map((desc, index) => (
        <Chip key={index} variant="bordered" radius="sm" className="mr-1" size="sm">
          {desc}
        </Chip>
      ));
    case "medicationsPrescribed":
      return treatment.medicationsPrescribed.map((med, index) => (
        <Chip key={index} variant="bordered" radius="sm" className="mr-1" size="sm">
          {med}
        </Chip>
      ));
    case "actions":
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip color="danger" content="Delete Treatment">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteIcon onClick={deleteFromIcon} />
            </span>
          </Tooltip>
        </div>
      );
    default:
      return cellValue;
  }
};
