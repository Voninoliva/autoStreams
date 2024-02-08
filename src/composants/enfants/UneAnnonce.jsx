import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSubmitDataToken } from '../generalise';
export default function UneAnnonce({ data,ip }) {  
    const token = localStorage.getItem('token');
    const voiture = data.voiture;
    const imageRenders = () => {
        return voiture.photos.map((detail, index) => (
            <div className={`item-${index + 1}`} key={index}>
                <figure className="image is-4by3" key={index}>
                    <img src={detail}
                        alt="Placeholder image" key={index} />
                </figure>
            </div>
        ));
    }
    function parlerAuVendeur(){
        const idutilisateur = data.idutilisateur;
        // ao amin le composant ato koa miantso an le verfication utilisateur
        
    }
    const navigate = useNavigate();
    const envoyer = useSubmitDataToken();
    const lien = `${ip}/favori`;
    async function addOnFavList(){
        if(token ==null){
            document.querySelector("#sign-ins").click();
        }
        else{
            console.log("ajout au favori");
            const objetAEnvoyer = {
                "annonce":{
                    "idannonce":data.idannonce
                }
            }
            console.log(JSON.stringify(objetAEnvoyer));
            const reponse=await envoyer(lien,objetAEnvoyer,token);

        }
    }

    return (
        <>
            <div className="tile is-parent is-4">
                <div className="tile is-child card">
                    <a className="card-image" href={`/detailAnnonce/${data.idannonce}`}>
                        <div className="carousel" style={{ overflowX: 'hidden' }}>
                            {imageRenders()}
                        </div>
                    </a>
                    <div className="card-content p-3">
                        <div className="list has-visible-pointer-controls has-overflow-ellipsis">
                            <div className="list-item">
                                <div className="list-item-content">
                                <span className='tag'>MGA {data.prix.toLocaleString('fr-FR')}</span>
                                    <div className="list-item-title has-text-info">{voiture.modele.nommodele} de {voiture.modele.marque.nommarque}</div>
                                    <div className="list-item-description help">{data.descri}</div>
                                </div>

                                <div className="list-item-controls has-text-info">
                                    <a className="icon is-clickable like" onClick={addOnFavList}>
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    </a>
                                    <a className="icon is-clickable" onClick={parlerAuVendeur}>
                                        <i className="fa-regular fa-paper-plane fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}