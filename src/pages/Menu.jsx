import React from "react";
import './Menu.css';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast1.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';
import { breakfastMenu } from './breakfastMenu';
import { lunchMenu } from './lunchMenu';
import { dinnerMenu } from './dinnerMenu';
import { dessertMenu } from './dessertMenu';
import { useState } from "react";




function Menu() {
    const [breakfast, setBreakfast] = useState(breakfastMenu);
    const [lunch, setLunch] = useState(lunchMenu);
    const [dessert, setDessert] = useState(dessertMenu);
    const [dinner, setDinner] = useState(dinnerMenu);

    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Breakfast</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="Breakfast" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfastMenu.map((breakfastMenu) => (
                                <div key={breakfastMenu.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfastMenu.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfastMenu.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfastMenu.price}
                                            </CardText>
                                            
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Lunch</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {lunchMenu.map((lunchMenu) => (
                                <div key={lunchMenu.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunchMenu.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunchMenu.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunchMenu.price}
                                            </CardText>
                                            </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dinner</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="Dinner" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dinnerMenu.map((dinnerMenu) => (
                                <div key={dinnerMenu.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinnerMenu.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinnerMenu.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinnerMenu.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dessert</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessertMenu.map((dessertMenu) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessertMenu.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessertMenu.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                            {dessertMenu.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;