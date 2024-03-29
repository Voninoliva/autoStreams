import 'bulma-dashboard/dist/bulma-dashboard.css';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import '../assets/profil/style.css';
import '../assets/profil/mystyle.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UneAnnonceProfile from './enfants/UneAnnonceProfile';
import UneAnnonceFavori from './enfants/UneAnnonceFavori';
export default function Profil({ ip }) {
//   login/profil
    const token = localStorage.getItem('token');
    const [url,setUrl] = useState(`${ip}/annonce/historique`);
    const [composantAAfficher,setIdComposant] = useState(0);
    const [renderDetails, setRender] = useState([]);
    const[titre,setTitre] = useState('Toutes ses annonces');
    const [email,setEmail] = useState('');
    const [nombreFavori,setNbFav] = useState('aucun');
    const[nba,setNbA] = useState('vide');
    function changerLien(){
        setUrl(`${ip}/annonce/historique`);
        setIdComposant(0);
        setTitre('Toutes ses annonces');
    }
    function sesFavoris(){
        setUrl(`${ip}/favori`);
        setIdComposant(1);
        setTitre('Favori');
    }
    const navigate = useNavigate();
    useEffect(()=>{
        async function fetchData(){
            try{
                if(token==null){
                    document.querySelector("#sign-ins").click();
                }
                else{
                    console.log(url);
                    var retournees = null;
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`, 
                        }    
                    });
                    if (response.ok) {
                        const responseData = await response.json();
                        if(composantAAfficher==0){
                            retournees = () => {
                                return responseData.map((detail, index) => (
                                    <UneAnnonceProfile data={detail.annonce ? detail.annonce : detail} key={index} ip={ip} etat={detail.etat}/>
                                ));
                            }
                        }
                        else{
                            retournees = () => {
                                return responseData.map((detail, index) => (
                                    <UneAnnonceFavori data={detail.annonce ? detail.annonce : detail} key={index} ip={ip} />
                                ));
                            }
                        }
                        setRender(retournees);
                        
                    }
                    const personneData = await fetch(`${ip}/login/profil`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`, 
                        }    
                    });
                    if(personneData.ok){
                        const pers = await personneData.json();
                       setEmail(pers.email);
                    }


                    // le resaka little dashboard
                    const nbFav = await fetch(`${ip}/favori`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`, 
                        }    
                    });
                    if(nbFav.ok){
                        const nbb =await nbFav.json();
                        setNbFav(nbb.length);
                    }
                    const nbannonces = await fetch(`${ip}/annonce/historique`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`, 
                        }    
                    });
                    if(nbannonces.ok){
                        const a = await nbannonces.json();
                        setNbA(a.length);
                    }
                }
            }
            catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        fetchData();
    },[url]);
function deconnexion(){
    localStorage.clear();
    console.log("deconnexion");
    navigate('/');
}
    return (
        <>
        {/* <section className="section pt-6 mt-6"> */}
            <h1>Profil</h1>
            <div className="dashboard is-full-height">
            <div className="dashboard-main is-scrollable">
            <section className="section pt-6 mt-6 p-5">
                <div className="content is-flex is-justify-content-space-between filter has-background-white py-3">
                    <h3>
                        {titre}
                    </h3>
                    <div className="field">
                        <div className="control">
                            <div className="dropdown is-right is-hoverable is-pulled-right">
                                <div className="dropdown-trigger">
                                    <div className="button" aria-haspopup="true" aria-controls="dropdown-menu6">
                                        <span>Categories</span>
                                        <span className="icon is-small">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu6" role="menu">
                                    <div className="dropdown-content">
                                        <a  className="dropdown-item" onClick={changerLien}>
                                            Tout ses annonces
                                        </a>
                                        <a href="#" className="dropdown-item" onClick={sesFavoris}>
                                            Ses favoris
                                        </a>
                                       
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
            <div className="dashboard-panel has-background-white is-hidden-touch pl-0" style={{position:'inherit',transform:"translateX(0%)"}}>
                <header className="dashboard-panel-header">

                </header>
                <div className="dashboard-panel-content">
                    <div className="has-background-info box mt-5" style={{ height: "216px" }}></div>
                    <div className="box"><a onClick={deconnexion}>Deconnexion</a></div>
                    <div className="box">
                        <p> <strong>Email : </strong> {email}</p>
                        <p> <strong> Nombre d'annonces publiees : </strong>{nba}</p>
                        <p><strong> Nombre d'annonces favoris :</strong> {nombreFavori}</p>
                        </div>
                </div>
            </div>
        </div>
        {/* </section> */}
       
        </>
    );
}