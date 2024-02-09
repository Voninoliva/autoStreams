import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import '../assets/css/style.css';
import { useEffect, useState } from 'react';
import UneAnnonce from './enfants/UneAnnonce';
function ComposantAnnonce({ ip }) {
    const [url, setUrl] = useState(`${ip}/validation/etat/1`);
    const [marque, setMarque] = useState(null);
    const [categorie, setCategorie] = useState(null);
    const [filtre,setFiltre] = useState('Toutes les annonces');
    const [sliceNumberMinMarque,setSliceNumberM] = useState(3);
    const [sliceNumberMinCategorie,setSliceNumberC] = useState(3);
    document.addEventListener('load', () => {
        document.querySelector('.pageloader').classList.add('is-active');
    });
    function ouvrirFlitre() {
        const dashboardPanel = document.querySelector('.dashboard-panel');
        dashboardPanel.classList.toggle('is-active');
    }
    function fermerFiltre() {
        const dashboardPanel = document.querySelector('.dashboard-panel');
        dashboardPanel.classList.remove('is-active');
    }
    function annoncesRecentes() {
        setUrl(`${ip}/annonce/recentes`);
        setFiltre('Tri par annonces les plus recentes');
    }
    function annoncesAnciennes() {
        setUrl(`${ip}/annonce/anciennes`);
        setFiltre('Tri par annonces les plus anciennes');
    }
    function rechercherPar(thisurl,titre){
        setFiltre(titre);
        setUrl(thisurl);
    }
    const [renderDetails, setRender] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const allAnnonceData = await fetch(url);
                const allAnnonce = await allAnnonceData.json();
                var retournees = null;
                if(allAnnonce.content){
                     retournees = () => {
                        return allAnnonce.content.map((detail, index) => (
                            <UneAnnonce data={detail.annonce ? detail.annonce : detail} key={index} ip={ip} />
                        ));
                    }
                }
                else{
                    retournees = () => {
                        return allAnnonce.map((detail, index) => (
                            <UneAnnonce data={detail.annonce ? detail.annonce : detail} key={index} ip={ip} />
                        ));
                    }
                }
               
                setRender(retournees);

            }
            catch (error) {
                console.log('Error fetching data:', error);
            }
        }

        fetchData();
    }, [url]);
    useEffect(() => {
        async function fetchData() {

            const urlMarque = `${ip}/marque`;
            const marqueData = await fetch(urlMarque);
            const marques = await marqueData.json();
            setMarque(marques);
            const categorieData = await fetch(`${ip}/categorie`);
            const cats = await categorieData.json();
            setCategorie(cats);
        }
        fetchData();

    }, []);
    // marque,categorie,dateSortie
    return (
        <>
            <div className="dashboard is-full-height">
                <div className="dashboard-panel is-small is-scrollable has-background-white">
                    <header className="dashboard-panel-header">

                    </header>
                    <div className="dashboard-panel-content">
                        <div className="buttons is-right">
                            <a className="delete close-menu" onClick={fermerFiltre}></a>
                        </div>
                        <aside className="menu has-text-white">
                            <p className="menu-label">
                                Marques
                            </p>
                            <ul className="menu-list">
                                {marque && marque.slice(0,sliceNumberMinMarque).map(item => (
                                    <li key={item.idmarque}><a onClick={()=>
                                    rechercherPar(`${ip}/annonce/marque/${item.idmarque}`,` ${item.nommarque}`)
                                    }>{item.nommarque}</a></li>
                                ))}
                               
                                    {marque && sliceNumberMinMarque==3?
                                     <li className='button is-info is-light'><a onClick={()=>{
                                        setSliceNumberM(marque.length)
                                     }}>Voir plus +</a></li>
                                    :<li className='button is-info is-light'><a  onClick={()=>{
                                        setSliceNumberM(3)
                                    }}>Voir moins -</a> </li>}
                                
                            </ul>
                            <p className="menu-label is-info">
                                Categories
                            </p>
                            <ul className="menu-list">
                                {categorie && categorie.slice(0,sliceNumberMinCategorie).map(item => (
                                    <li key={item.idcategorie}><a onClick={()=>
                                        rechercherPar(`${ip}/annonce/categorie/${item.idcategorie}`,` ${item.nomcategorie}`)
                                        }>{item.nomcategorie}</a></li>
                                ))}
                               {categorie && sliceNumberMinCategorie==3?
                                     <li className='button is-info is-light'><a onClick={()=>{
                                        setSliceNumberC(categorie.length)
                                     }}>Voir plus +</a></li>
                                    :<li className='button is-info is-light'><a  onClick={()=>{
                                        setSliceNumberC(3)
                                    }}>Voir moins -</a> </li>}
                            </ul>
                        </aside>
                    </div>
                </div>
                <div className="dashboard-main is-scrollable">
                    <section className="section pt-6 mt-6">
                        <div className="columns is-mobile has-background-white">
                            <div className="column is-2">
                                <div className="field is-hidden-touch">
                                    <div className="control">
                                        <label className="label">
                                            Filtre(s)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-8 field is-grouped is-grouped-multiline">
                                <div className="control is-hidden-touch">
                                    <div className="tags has-addons">
                                        <div className="tag is-info">{filtre}</div>
                                        <a className="tag is-delete"></a>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-2">
                                <div className="field is-grouped is-grouped-right">
                                    <div className="control">
                                        <button className="button is-rounded is-white filter" onClick={ouvrirFlitre}>
                                            <span className="icon has-text-info">
                                                <i className="fa-solid fa-sliders"></i>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="control">
                                        <div className="dropdown is-right is-hoverable is-pulled-right">
                                            <div className="dropdown-trigger">
                                                <div className="button" aria-haspopup="true" aria-controls="dropdown-menu6">
                                                    <span>Filtrer par</span>
                                                    <span className="icon is-small">
                                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="dropdown-menu" id="dropdown-menu6" role="menu">
                                                <div className="dropdown-content">
                                                    <a href="#" className="dropdown-item" onClick={annoncesAnciennes}>
                                                        Annonces plus anciennes
                                                    </a>
                                                    <a href="#" className="dropdown-item" onClick={annoncesRecentes}>
                                                        Annonces les plus récentes
                                                    </a>

                                                    <a href="#" className="dropdown-item">
                                                        Prix: décroissant
                                                    </a>
                                                    <a href="#" className="dropdown-item">
                                                        Prix: croissant
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tile is-ancestor columns is-multiline">
                            {renderDetails}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
export default ComposantAnnonce;