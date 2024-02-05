import { useParams } from "react-router-dom";
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import { useEffect, useState } from "react";
import OptionKely from "./OptionsKely";
export function DetailAnnonce({ip}){
    const displayedImages = [
        'https://bulma.io/images/placeholders/1280x960.png',
        'https://bulma.io/images/placeholders/1280x960.png',
        'https://bulma.io/images/placeholders/1280x960.png',
        'https://bulma.io/images/placeholders/1280x960.png',
        'https://bulma.io/images/placeholders/1280x960.png'
    ];
    const annonceData = {
        idannonce: 1,
        descri: "",  
        datepub: "2024-02-05T12:45:29.577781",
        idutilisateur: "65bd4b79a17aa7656d5efaca",
        prix: 8000000,
        voiture: {
          conduite: { idconduite: 1, nomconduite: 'Conduite a droite' },
          cylindre: 8,
          datesortie: "2018-02-11T00:00:00.000+00:00",
          drivetype: { iddrivetype: 3, nomdrivetype: 'Integrale' },
          energie: { idenergie: 3, nomenergie: 'Bio-diesel' },
          fumeur: 19,
          idoptions: [1],
          idvoiture: 3,
          kilometrage: 12000,
          modele: { idmodele: 1, nommodele: '', poids: 2300, longueur: 3.5, largeur: 2 },
          nbplace: 5,
          nbporte: 4,
          photos: [
            displayedImages
          ],
          puissance: 700,
          transmission: { idtransmission: 3, nomtransmission: 'Semi-automatique' },
        },
      };
    const {idannonce} = useParams();
    const url=`${ip}/annonce/${idannonce}`;
    const [options,setOptions] = useState([]);
    const [annonce,setAnnonce]=useState(annonceData);
    useEffect(()=>{
        const fetchData = async () =>{
        try{
            const annonceDonnees = await fetch(url);
            const vraieAnnonce = await annonceDonnees.json();
            setAnnonce(vraieAnnonce);
            console.log(annonce);
            var a='';
            var mot = '';
            // if(vraieAnnonce){
            //     async function ifs() {
            //         const optionsText = await Promise.all(
            //           annonce.voiture.idoptions.map(async (detail) => {
            //             const response = await fetch(`${ip}/options/${detail}`);
            //             const optionDetail = await response.json();
            //             return optionDetail.nomoptions;
            //           })
            //         );
            //         return optionsText;
            //       }
            //       ifs().then((optionsText) => {
            //         console.log(optionsText);
            //       });
            // } 
        }
        catch (error) {
            // console.error('Error fetching data:', error);
        }
        };
        fetchData();
    },[url]);

    return (
        <>
             <section className="section">
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
                                    <OptionKely ip={ip} idvoiture={annonce.voiture.idvoiture}/>
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
                               
                            </h1>
                            <article>
                              
                            </article>
                            <blockquote>
                                <h3>
                                    {/* MGA {prix.toLocaleString('fr-FR')} */}
                                </h3>
                            </blockquote>

                            <div className="buttons is-right">
                                <button className="button is-info has-text-weight-semibold">
                                    Confirmer
                                </button>
                                <button className="button is-danger has-text-weight-semibold">
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="tile is-6 carousel has-ribbon-top" style={{ overflowX: "hidden" }}>
                    {imagesDAnnonce.map((image, index) => (
                        <div key={index} className={`tile is-parent`}>
                            <div className={`tile is-child item-${index + 1}`}>
                                <figure className="image is-3by5">
                                    <img src={image} alt={`Placeholder image ${index + 1}`} />
                                </figure>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
        </>
    );
}