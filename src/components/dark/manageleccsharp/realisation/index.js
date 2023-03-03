import React from "react";
import "./realisation.css"


function Realisation() {
    return (
    <div className="body">
        <div className="realisation">
            <p>
                Réalisation :
            </p>
            <div className="realisationList">
                <ul>
                    <li>Réalisation d'un graphique UML pour la visualisation des Objets</li>
                        <div>
                            <p>
                                J'ai commencer ce projet par la mise en place d'un graphique UML 
                                qui permet de visualiser les Objets (Entité, Manager, Controler, ...)
                                Nécessaire a la réalisation et au fonctionne de l'application et de
                                la base de donnée cela à pris deux trois heures 
                            </p>
                        </div>
                        <li>Réalisation de la base de donnée</li>
                        <div>
                            <p>
                                Après la réalisation du graphique UML je me suis mis a la 
                                création et la préparation de la base de donnée cette étape a été la
                                plus rapide et a pris a peu près une à deux heures
                            </p>
                        </div>
                        <li>Réalisation du code de l'application</li>
                        <div>
                            <p>
                                Après la réalisation de la base de donnée je me suis mis au devellopement de
                                l'application cette étape a pris  à peu près une centaine d'heure.
                                J'ai commencer par d'abord codé les différente entité avec leur 
                                managerspuis j'ai réaliser l'interface utilisateur pour enfin finir 
                                par relier l'interface au entité avec leur manager pour mettre en
                                 place les différentes fonctionnalitées en faisant attention que le
                                 code soit maintenable et qui soit évolutif
                            </p>
                        </div>
                        <li>Phase de test de l'application</li>
                        <div>
                            <p>
                                Suite au dévellopement de l'application je me suis attardé 
                                au différents test de l'application afin que les demandes du 
                                "client" soit respecté et éviter les différents code erreurs
                                et égallement de vérifier le bon fonctionnement de la vérification de 
                                saisie afin d'éviter les erreurs ou les bugs lors de la persistance 
                                en base de donnée. cette étapes a pris a peut près une vingtaine 
                                d'heures 
                            </p>
                        </div>
                        <li>Correction des erreur </li>
                        <div>
                            <p>
                                Après les test et l'énumération des erreurs trouvé lors de ceux si je l'ai ai corrigé. Il y avait une quizaine d'erreur qui était principalement
                                des erreur de vérification de saisie cette partie à pris une quarantaine d'heures 
                             </p>
                        </div>
                </ul>
                <p>Total des heures: à peu près 170</p>
            </div>
        </div>
    </div>
    );
  }
  
  export default Realisation;