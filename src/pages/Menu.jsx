import React from "react";
import './Menu.css';
import { Card, CardBody, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/dish_home.jpg'

function Menu() {
    return (
        <div className="menu-page">
            <header className="mt-5">
                <div className="container h-100 d-flex
                 align-items-center justify-content-center">
                    <h1 className="text-light">Menu</h1>
                </div>
            </header>
        </div>
    )
}

export default Menu;