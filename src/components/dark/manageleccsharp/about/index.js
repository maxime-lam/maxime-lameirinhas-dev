import React from "react";
import "./about.css";


function About() {
    return (
    <div className="body">
        <div className="about">
            <p>
                Manageleccsharp est un projet de creation d'un progitiel de gestion de commande
                et de clients
            </p><br/>
            <p>
                Il a été effectuer en octobre 2022 dans le cadre d'un projets de cours de le but 
                de l'obtention du BTS SIO option SLAM
            </p>
            <p>
                L'application a été réalisé en  C# WinForm avec le framework .NET 6
            </p>
            <p>
                
            </p>
        </div>
        <div className="features">
            <p>Les fonctionalité</p>
            <ul>
                 <li>Rechercher un client via son id</li>
                 <li>Rechercher un client via ses commandes</li>
                 <li>Rechercher une commande via son id</li>
                 <li>Rechercher une commande via son client</li>
                 <li>Vérifier l'état de payement d'une commande</li>
                 <li>Changer l'état de payement d'une commande</li>
                 <li>Vérifier l'état de l'expédition d'une commande</li>
                 <li>Changer l'état de l'éxpédition d'une commande</li>
                 <li>Consulter la fiche d'un produit</li>
            </ul>
        </div>
    </div>
    );
  }
  
  export default About;