import '../assets/css/bulma/css/bulma.min.css';
import '../assets/css/mystyle.css';
import '../assets/css/style.css';
import '../assets/js/myscript';
import logo from '../assets/img/logo.png';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import {Navigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logo0 from '../assets/img/logins/login0.png';
import logo1 from '../assets/img/logins/login1.png';
import logo2 from '../assets/img/logins/login2.png';
export default function Menu({ip}) {
    const token=localStorage.getItem('token');
    const [loading, setLoading] = useState(false);
    function menuResponsive() {
        console.log("atooooo");
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        $navbarBurgers.forEach(el => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    }
    function initCarouselLogin() {
        bulmaCarousel.attach('.carousel-login', {
            slidesToScroll: 1,
            slidesToShow: 1,
            autoplay: true,
            infinite: true,
            navigation: false,
            navigationKeys: false,
            pagination: false,
        });
        removePagination();
    }
    function removePagination() {
        const previous = document.querySelectorAll('.slider-navigation-previous');
        previous.forEach((item) => {
            item.classList.add('is-hidden');
        });
        const next = document.querySelectorAll('.slider-navigation-next');
        next.forEach((item) => {
            item.classList.add('is-hidden');
        });
    }
    const navigate0 = useNavigate();
    function openModal() {
        if(token!=null){
            navigate0('/profil');
        }
        else{
            const modal = document.querySelector('.modal');
            const signIn = document.querySelectorAll('.sign-in');
            signIn.forEach((item) => {
                modal.classList.add('is-active');
                initCarouselLogin();
            });
        }
        
    }
    function closeModal() {
        const modal = document.querySelector('.modal');
        const closeModal = document.querySelector('.modal-close');
        modal.classList.remove('is-active');
        navigate0('/');
    }
    const v = `${ip}/login/auth`;
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('pwd');
        const objetAEnvoyer = {
            'email': email,
            'mdp': password
        }
        try {
            const response = await fetch(v, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(objetAEnvoyer)
            });
            if (response.ok) {
                const responseData = await response.json();
                const token = responseData.response.token;
                localStorage.setItem('token',token);
                closeModal();
                navigate('/profil');
            }
            else {
                navigate('/');
            }
        }
        catch (error) {
            alert('Erreur lors de la connexion'+ error);
        }
    }
    return (
        <>
            <div className="pageloader is-info"></div>
            <header className="has-navbar-fixed-top">
                <nav className="navbar is-fixed-top is-transparent has-background-light">
                    <div className="container is-fluid">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="#">
                                <img src={logo} />
                                AUTOSTREAM
                            </a>
                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="menu" onClick={menuResponsive}>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div className="navbar-menu" id="menu">
                            <div className="navbar-end">
                            <a className="navbar-item is-tab is-hidden-desktop" href='/'>
                                    Toutes les annonces
                                </a>
                                <a className="navbar-item is-tab is-hidden-desktop sign-in" id="sign-ins" onClick={openModal}>
                                    Mon profil
                                </a>
                                <a className="navbar-item is-tab is-hidden-desktop" href="/messages">
                                    Mes messages
                                </a>
                                <div className="navbar-item">
                                    <div className="field">
                                        <div className="control has-icons-left is-expanded">
                                            <input type="text" placeholder="Rechercher ici" className="input is-light is-rounded" />
                                            <span className="icon is-small is-left is-clickable">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-item is-hidden-touch">
                                    <div className="buttons is-right">
                                    <a className="button is-rounded is-light has-text-info" href='/'>
                                            <span className="icon">
                                            <i className="fa-solid fa-scroll fa-lg"></i>
                                            </span>
                                        </a>
                                        <a className="button is-rounded is-light has-text-info sign-in"  id="sign-ins" onClick={openModal}>
                                            <span className="icon">
                                                {token?
                                                <i className="fa-solid fa-user-gear"></i>
                                                :<i className="fa-regular fa-user fa-lg"></i>}
                                            </span>
                                        </a>
                                        <a  href="/messages" className="button is-rounded is-light has-text-info">
                                            <span className="icon">
                                                <i className="fa-regular fa-paper-plane fa-lg"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box" style={{ overflowY: "hidden", height: "590px",paddingBottom:"15%" }}>
                        <div className="columns mb-5">
                            <div className="column is-8 p-0 is-hidden-touch">
                                <div className="carousel-login" style={{ overflowX: "hidden" }}>
                                    <div className="item-1">
                                        <figure className="image is-4by3">
                                            <img src={logo0} alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="item-2">
                                        <figure className="image is-4by3">
                                            <img src={logo1} alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="item-3">
                                        <figure className="image is-4by3">
                                            <img src={logo2} alt="Placeholder image" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <form className="column is-4 is-full-touch pl-5"  onSubmit={handleSubmit}>
                                <div className="content is-flex is-flex-direction-column is-justify-content-center is-align-content-center"
                                    style={{ height: "92.5%" }}>
                                    <div className="is-flex is-justify-content-center">
                                        <figure className="image is-64x64 is-flex">
                                            <img src={logo} className="is-rounded" />
                                        </figure>
                                    </div>
                                    <div className="field">
                                        <label className="label">
                                        {loading && <p >En cours de chargement...</p>}
                                            E-mail</label>
                                        <div className="control">
                                            <input type="email" className="input" placeholder="Entrez votre adresse e-mail" name='email'/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Mot de passe</label>
                                        <div className="control">
                                            <input type="password" className="input" placeholder="Entrez votre mot de passe" name='pwd'/>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-fullwidth is-info" type='submit'>
                                                Se connecter
                                            </button>
                                        </div>
                                    </div>
                                    <div className="is-divider" data-content="OU"></div>
                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-fullwidth is-info is-outlined has-text-weight-bold">
                                                Continuer avec Google
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" onClick={closeModal}></button>
            </div>
        </>
    );
}