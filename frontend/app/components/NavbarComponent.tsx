import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import styles from "@/app/css/NavbarComponent.module.css"

export function NavbarComponent() {
  return (
    <Navbar  className="py-2 px-20" maxWidth="xl">
      <NavbarBrand>
        <Link href="https://qsaifudin.site">
        <h3 style={{fontSize: "30px"}}>👉<span className={styles.animateText}>Saifudin</span> </h3>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
      {/* <ThemeSwitcher></ThemeSwitcher> */}
      <div className="flex justify-end">

      <Button size="sm"  variant="flat" className="mr-1" as="a"  href="https://www.linkedin.com/in/qsaifudin/" target="_blank">Linkedin</Button>
      <Button size="sm"  variant="flat" className="mr-1" as="a"  href="https://qsaifudin.site/" target="_blank">Website</Button>
      <Button  size="sm"  variant="flat" as="a"  href="https://github.com/qsaifudin" target="_blank">Github</Button>
      </div>
      </NavbarContent>
    </Navbar>
  );
}
