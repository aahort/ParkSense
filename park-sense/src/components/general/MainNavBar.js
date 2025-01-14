/*
Name: MainNavBar.js
Description: Component to display main navigation bar
Authors: Troy D'Amico, Sam Aldeguer, Aaron Horton
Date: 10/03/23
*/
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom'
import "primereact/resources/themes/lara-light-blue/theme.css";
import 'primereact/resources/primereact.min.css';
import logo2 from "../../img/logos/parksense-logo2.png";

export default function MainNavBar(){
    const navigate = useNavigate();

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-file',
            command: () => {navigate('/');}
        },
        {
            label: 'Availability',
            icon: 'pi pi-fw pi-pencil',
            command: () => {navigate('/availability');}
        },
        {
            label: 'Parking Map',
            icon: 'pi pi-fw pi-user',
            command: () => {navigate('parking-map');}
        }
    ];

    const start = <img alt="logo" src={logo2} height="40" className="mr-2"></img>;
    const end = <InputText placeholder="Search Lot" type="text" className="w-full" />;
    return (
        <Menubar model={items} start={start} end={end} />
    )
}