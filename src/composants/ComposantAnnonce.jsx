import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import '../assets/css/style.css';
import { useEffect, useState } from 'react';
import UneAnnonce from './enfants/UneAnnonce';
function ComposantAnnonce({ ip }) {
    const [url,setUrl] = useState(`${ip}/validation/etat/1`);
    document.addEventListener('load', () => {
        document.querySelector('.pageloader').classList.add('is-active');
    });
    function ouvrirFlitre(){
        const dashboardPanel = document.querySelector('.dashboard-panel');
        dashboardPanel.classList.toggle('is-active');
    }
    function fermerFiltre(){
        const dashboardPanel = document.querySelector('.dashboard-panel');
        dashboardPanel.classList.remove('is-active');
    } 
    function annoncesRecentes(){
        setUrl(`${ip}/annonce/recentes`);
    }
    function annoncesAnciennes(){
        setUrl(`${ip}/annonce/anciennes`);
    }
  const[renderDetails,setRender] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            console.log("niova le url zany  ",url);
            try{
                const allAnnonceData = await fetch(url);
                const allAnnonce = await allAnnonceData.json();
                const retournees = () => {
                    return  allAnnonce.map((detail,index)=>(
                        <UneAnnonce data={detail.annonce?detail.annonce:detail} key={index}/>
                    ));
                }
                setRender(retournees);
            }
            catch (error) {
                console.log('Error fetching data:', error);
            }
        }
       
        fetchData();
    },[url]);
    useEffect(()=>{
        bulmaCarousel.attach('.carousel', {
            initialSlide: 1,
            slidesToScroll: 1,
            slidesToShow: 1,
            navigation: false,
        });
    });
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
                                Marques populaires
                            </p>
                            <ul className="menu-list">
                                <li><a>Dashboard</a></li>
                                <li><a>Customers</a></li>
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
                                        <div className="tag is-info">Technology</div>
                                        <a className="tag is-delete"></a>
                                    </div>
                                </div>

                                <div className="control is-hidden-touch">
                                    <div className="tags has-addons">
                                        <div className="tag is-info">CSS</div>
                                        <a className="tag is-delete"></a>
                                    </div>
                                </div>

                                <div className="control is-hidden-touch">
                                    <div className="tags has-addons">
                                        <div className="tag is-info">Flexbox</div>
                                        <a className="tag is-delete"></a>
                                    </div>
                                </div>

                                <div className="control is-hidden-touch">
                                    <div className="tags has-addons">
                                        <div className="tag is-info">Web Design</div>
                                        <a className="tag is-delete"></a>
                                    </div>
                                </div>

                                <div className="control is-hidden-touch">
                                    <div className="tags has-addons">
                                        <div className="tag is-info">Open Source</div>
                                        <a className="tag is-delete"></a>
                                    </div>
                                </div>

                                <div className="control is-hidden-touch">
                                    <div className="tags has-addons">
                                        <div className="tag is-info">Community</div>
                                        <a className="tag is-delete"></a>
                                    </div>
                                </div>

                                <div className="control is-hidden-touch">
                                    <div className="tags has-addons">
                                        <div className="tag is-info">Documentation</div>
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
                                                        Annonces les plus récentess
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