import { useParams } from "react-router-dom";
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import { useEffect, useState, useRef } from "react";
import PictureSwaper from "./PictureSwaper/PictureSwaper";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function DetailAnnonce({ ip }) {
    const displayedImages = [
        'https://bulma.io/images/placeholders/1280x960.png',
        'https://bulma.io/images/placeholders/1280x960.png',
        'https://bulma.io/images/placeholders/1280x960.png',
        'https://bulma.io/images/placeholders/1280x960.png',
        'https://bulma.io/images/placeholders/1280x960.png'
    ];
    const carouselRef = useRef(null);
    const annonceData = {
        idannonce: 1,
        descri: "",
        datepub: "2024-02-05T12:45:29.577781",
        idutilisateur: "",
        prix: 8000000,
        voiture: {
            conduite: { idconduite: 1, nomconduite: '' },
            cylindre: 8,
            datesortie: "2018-02-11T00:00:00.000+00:00",
            drivetype: { iddrivetype: 3, nomdrivetype: '' },
            energie: { idenergie: 3, nomenergie: '' },
            fumeur: 19,
            idoptions: [1],
            idvoiture: 3,
            kilometrage: 0,
            modele: {
                idmodele: 1,
                nommodele: "Ceed SW hybride rechargeable",
                poids: 2300,
                etat: 0,
                reservoire: 6,
                carrosserie: {
                    idcarrosserie: 5,
                    nomcarrosserie: 'Cabriolet'
                },
                categorie: {
                    idcategorie: 2,
                    nomcategorie: 'Famille'
                },
                hauteur: 2,
                largeur: 2,
                longueur: 3.5,
                marque: {
                    idmarque: 5,
                    nommarque: 'BMW',
                    continent: {
                        idcontinent: 1,
                        nomcontinent: ''
                    },
                    photo: 'qsdfg'
                }
            },
            nbplace: 5,
            nbporte: 4,
            cubage: 0,
            photos: [
                displayedImages
            ],
            puissance: 700,
            transmission: { idtransmission: 3, nomtransmission: '' },
        },
    };
    const { idannonce } = useParams();
    const url = `${ip}/annonce/${idannonce}`;
    const [options, setOptions] = useState('');
    const [annonce, setAnnonce] = useState(annonceData);
    const dateObj = new Date(annonce.datepub);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const annonceDonnees = await fetch(url);
                const vraieAnnonce = await annonceDonnees.json();
                setAnnonce(vraieAnnonce);
                if (vraieAnnonce != annonceData) {
                    const renderOptionsPromises = annonce.voiture.idoptions.map(async (detail, index) => {
                        const optionsResponse = await fetch(`${ip}/options/${detail}`);
                        const optionsData = await optionsResponse.json();
                        return <li key={index}>{optionsData.nomoptions}</li>;
                    });

                    const renderOptions = await Promise.all(renderOptionsPromises);

                    setOptions(renderOptions);
                }
            }
            catch (error) {
                // console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // useEffect(()=>{
    //        console.log(" uploaded ",annonce)
    //     },[annonce]);
    function parlerAuVendeur() {

    }
    return (
        <>
            <section className="section pt-6 mt-6">
                <div className="columns">
                    <div className="column is-7">
                        <article className="media mb-6">
                            <span className="media-left icon has-text-info is-size-3">
                                <i className="fa-solid fa-gear"></i>
                            </span>
                            <div className="media-content">
                                <div className="content">
                                    <h3 className="has-text-info">Options</h3>
                                    <ol>
                                        {options}
                                    </ol>
                                </div>
                            </div>


                        </article>
                    </div>
                    <div className="column">
                        <article className="media mb-6">
                            <span className="media-left icon has-text-info is-size-3">
                                <i className="fa-solid fa-wrench"></i>
                            </span>
                            <div className="media-content">
                                <div className="content">
                                    <h3 className="has-text-info">A propos</h3>
                                    <ul>
                                        <li><strong>Energie</strong> {annonce.voiture.energie.nomenergie}</li>
                                        <li><strong>Transmission</strong> {annonce.voiture.transmission.nomtransmission}</li>
                                        <li><strong>Drive Type</strong> {annonce.voiture.drivetype.nomdrivetype}</li>
                                        <li><strong>Puissance</strong>  {annonce.voiture.puissance} CV</li>
                                        <li><strong>Continent</strong>   {annonce.voiture.modele.marque.continent.nomcontinent}</li>
                                        <li><strong>Cylindre</strong> {annonce.voiture.cylindre ? annonce.voiture.cylindre : 'non specifie'}</li>
                                        <li><strong>Cubage</strong>  {annonce.voiture.cubage ? annonce.voiture.cubage : 'non specifie'}</li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-6">
                        <div className="tile is-child">
                            <div className="content has-text-right has-text-left-mobile">
                                <h1 className="has-text-info">
                                    {annonce.voiture.modele.nommodele} de {annonce.voiture.modele.marque.nommarque}
                                </h1>
                                <div className="py-3">
                                    <span className="tag is-primary is-light"> {annonce.voiture.nbporte} portes </span>
                                    <span className="tag is-primary is-light"> {annonce.voiture.nbplace} places </span>
                                    <span className="tag is-primary is-light"> {annonce.voiture.conduite.nomconduite} </span>
                                    <span className="tag is-primary is-light">{annonce.voiture.modele.reservoire} L</span>
                                    <span className="tag is-primary is-light">{annonce.voiture.modele.carrosserie.nomcarrosserie}</span>
                                    <span className="tag is-primary is-light">{annonce.voiture.modele.longueur} X {annonce.voiture.modele.largeur} X {annonce.voiture.modele.hauteur} </span>
                                    <span className="tag is-primary is-light">{annonce.voiture.modele.poids} T</span>
                                </div>
                                <nav className="level is-mobile">
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading">Kilometrage</p>
                                            <p className="title"> {annonce.voiture.kilometrage.toLocaleString('fr-FR')}</p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading">Annee</p>
                                            <p className="title">
                                                {new Date(annonce.voiture.datesortie).getFullYear()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading">Etat</p>
                                            <p className="title">
                                                {annonce.voiture.etat ? annonce.voiture.etat : 'non specifie'}</p>
                                        </div>
                                    </div>
                                </nav>
                                <article>
                                    {annonce.descri}
                                </article>
                                <blockquote>
                                    <h3>
                                        MGA {annonce.prix.toLocaleString('fr-FR')}
                                    </h3>
                                </blockquote>

                                <div className="buttons is-right">
                                    <button className="button is-info has-text-weight-semibold" onClick={parlerAuVendeur}>
                                        Parler au vendeur
                                    </button>
                                    <button className="button is-info is-light has-text-weight-semibold">
                                        Date de l'annonce : {formattedDate}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PictureSwaper pictures={annonce.voiture.photos} />

                </div>
            </section>
        </>
    );
}