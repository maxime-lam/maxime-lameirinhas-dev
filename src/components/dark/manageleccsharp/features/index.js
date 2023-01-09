import React from "react";
import "./features.css";


function Features() {
    return (
    <div className="body">
        <div className="features">
            <p>
                les fonctionalités :
            </p>
            <div className="featuresList">
                <ul>
                    <li>Rechercher un clients avec son id</li>
                    <li>Rechercher un clients avec ces commandes</li>
                    <li>Rechercher un clients avec son id</li>
                    <li>Vérifier le payement et l'expedition d'une commande</li>
                    <li>Changer l'état du payement et de l'expedition d'une commande</li>
                    <li>Accéder a la fiche d'un produit</li>
                    <li>Générer une liste de colissage</li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
  
  export default Features;