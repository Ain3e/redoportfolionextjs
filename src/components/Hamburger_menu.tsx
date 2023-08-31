import { Fade as Hamburger } from 'hamburger-react'
import {useState} from "react";

export default function Hamburger_menu() {
    const [isOpen, setOpen] = useState(false)
    return(
        <Hamburger toggled={isOpen} toggle={setOpen} />


    )
}

