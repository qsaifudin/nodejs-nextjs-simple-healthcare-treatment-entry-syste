import Image from "next/image";
import { Button } from "@nextui-org/button";
import { TableComponent } from "./components/TableComponent";
import { CardComponent } from "./components/CardComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TableComponent />
      {/* <CardComponent></CardComponent> */}
      </main>
  );
}
