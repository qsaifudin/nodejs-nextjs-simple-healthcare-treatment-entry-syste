import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { PlusIcon } from "../components/icon";
import { useState } from "react";

export function TreatmentModal({ updateTreatmentData }: { updateTreatmentData: () => void }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [dateOfTreatment, setDateOfTreatment] = useState("");
  const [treatmentDescription, setTreatmentDescription] = useState([]);
  const [medicationsPrescribed, setMedicationsPrescribed] = useState([]);
  const [costOfTreatment, setCostOfTreatment] = useState("");

  const medications = ["Medication 1", "Medication 2", "Medication 3"];
  const treatment = ["Treatment 1", "Treatment 2", "Treatment 3"];
  const clearFormData = () => {
    setPatientName("");
    setPatientId("");
    setDateOfTreatment("");
    setTreatmentDescription([]);
    setMedicationsPrescribed([]);
    setCostOfTreatment("");
  };
  const handleSave = async () => {
    const formData = {
      patientName,
      patientId,
      dateOfTreatment,
      treatmentDescription: Array.from(treatmentDescription),
      medicationsPrescribed: Array.from(medicationsPrescribed),
      costOfTreatment: parseInt(costOfTreatment),
    };

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        onClose();
        clearFormData();
        updateTreatmentData();
      } else {
        // Handle error
        console.error("Failed to submit form:", response.statusText);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to submit form:", error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button color="primary" endContent={<PlusIcon />} onPress={onOpen}>
        Entry New Treatment
      </Button>
      <Modal
        backdrop="blur"
        size="3xl"
        isOpen={isOpen}
        onOpenChange={(nextOpen) => {
          clearFormData();
          onOpenChange(nextOpen);
        }}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Entry New Treatment</ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Patient Name" value={patientName} onValueChange={setPatientName} />
                  <Input label="Patient ID" value={patientId} onValueChange={setPatientId} />
                  <Input
                    type="date"
                    label="Date of Treatment"
                    value={dateOfTreatment}
                    onValueChange={setDateOfTreatment}
                  />
                  <Select
                    label="Treatment Description"
                    selectionMode="multiple"
                    selectedKeys={treatmentDescription}
                    onSelectionChange={setTreatmentDescription}
                  >
                    {treatment.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Medications Prescribed"
                    selectionMode="multiple"
                    selectedKeys={medicationsPrescribed}
                    onSelectionChange={setMedicationsPrescribed}
                  >
                    {medications.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </Select>

                  <Input
                    label="Cost of Treatment"
                    type="number"
                    value={costOfTreatment}
                    onValueChange={setCostOfTreatment}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleSave} isLoading={isLoading}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
