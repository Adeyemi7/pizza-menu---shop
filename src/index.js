import React from 'react';
import ReactDOM from 'react-dom/client';
import './data.js';
import './style.css';
import './index.css'

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with Italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozzarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozzarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozzarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
            <ul className='pizzas'>
                {pizzaData.map((pizza) => (
                    <Pizza buyPizza={pizza} key={pizza.name} />
                ))}
            </ul>
        </main>
    );
}

function Pizza(props) {
    console.log(props);

    return (
        <li>
            <div className='pizza'>
                <img src={props.buyPizza.photoName} alt={props.buyPizza.name} />
                <div>
                    <h3>{props.buyPizza.name}</h3>
                    <p>{props.buyPizza.ingredients}</p>
                    <span>{props.buyPizza.price}</span>
                </div>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 1;
    const closedHour = 22;
    const isOpen = hour >= openHour && hour <= closedHour;
    console.log(isOpen);

    return (
        <footer className='footer'>
            {isOpen && (
                <div className="order">
                    <p>We're open until {closedHour}:00. Come visit us or order online  🍕✨.</p>
                    <button className="btn">Order</button>
                </div>
            )}
        </footer>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);