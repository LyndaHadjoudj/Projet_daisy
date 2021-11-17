import React from "react";
import logoH from "../../images/logoH.png";
import logoLoc from "../../images/logoLoc.png";
import Call from "../../images/Call.png";
import email from "../../images/email.png";

import "./Formulaire.css";
const  Formualaire =() =>{
      return(
            <section class="Contact-us">
                  <div class="row">
                  <div class="Contact-col">
                        <img className="image" src={logoH}></img>
                        <h5>HORAIRES</h5> 
                        <p>Nous sommes à votre écoute {<br/>}du lundi au vendredi de 9h à 17h</p>

                        <img className="image" src={logoLoc}></img>
                        <h5>ADRESSE</h5> 
                        <p>Nous sommes à votre écoute {<br/>}du dimanche au jeudi de 9h à 17h</p>
                        
                        <img className="image"src={email}></img>
                        
                        <h5 className="titre5">JOINDRE</h5> 
                        <p>email : daisy@gmail.com</p>

                        <p>Num-tel : 0262628</p>
                   </div>
	
                 
            <div class="Contact-col">
                  <h1>Formulaire de contact</h1>
			<input type="text" name="name" placeholder="votre nom" required></input>
			<input type="email" name="email" placeholder="votre prenom" required></input>
			<input type="text" name="subject" placeholder="adresse email" required></input>
                  <input type="text" name="subject" placeholder="Numéro de téléphone" required></input>
			<textarea rows="8" name="message" placeholder="décrivez votre projet " required=""></textarea>
			<button className="btn1" type="submit">Envoyer</button>
			
		</div>
            
            </div>
            
         
            </section>
      );
};
export  default Formualaire;
