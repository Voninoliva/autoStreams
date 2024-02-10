import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

import React, { useState, useEffect } from 'react';
import ListConversation from './list-conversation';
import Message from './Messages';
import { useParams } from 'react-router';



const api = axios.create({
    baseURL: 'https://back-autostream-production.up.railway.app/'
})

const MessageEntreUser = () => {

    const { idVendeur } = useParams();


    const [messages, setMessages] = useState([]);
    const [token, setToken] = useState('');
    const [mailToken, setMailToken] = useState('');
    const [idUserConnected, setIdUserConnected] = useState('');
    const [idReceive, setIdReceive] = useState('');
    const [message, setMessage] = useState('');
    const [utilisateurDejaParler, setUtilisateurDejaParler] = useState([]);
    const [nomInterlocuteur, setNomInterlocuteur] = useState('');
    const [vendeur, setVendeur] = useState('');


    useEffect(() => {
        if (!idVendeur) return;

        setIdReceive(idVendeur);
        // console.log("tafiditra");

    }, [idVendeur]);


    const conversation = () => {
        // console.log("conversation");
        fetchData(idReceive);
    }

    useEffect(() => {
        if (idReceive != '') {
            conversation();
        }
    }, [idReceive])

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
        else {
            document.querySelector("#sign-ins").click();
        }
    }, []);

    useEffect(() => {
        if (!token) return;

        // fetchData();
        listUserDejaParler();
    }, [token]);

    useEffect(() => {
        if (!mailToken) return;

        getIdUserConnecteByEmail(mailToken)
    }, [mailToken]);

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleConversationClick = (userReceive) => {
        // Mettre à jour l'ID reçu
        setIdReceive(userReceive.idutilisateur);
        setNomInterlocuteur(userReceive.nomutilisateur);

        fetchData(userReceive.idutilisateur);
        // console.log("messages:", messages);
        // console.log("idReceive:", idReceive);

    };

    const listUserDejaParler = async () => {
        try {
            const response = await api.get('/message/texted', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // console.log(response);
            setUtilisateurDejaParler(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const sendMessage = async () => {
        try {
            const response = await api.post('/message', {
                description: message,
                idreceive: idReceive
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setMessage('');
            fetchData(idReceive)

            // window.location.reload();
        } catch (error) {
            setMessage('');
            console.log(error);
        }
    };



    const fetchData = async (id) => {
        try {
            const response = await api.get(`/message/messages?idReceive=${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // console.log(response.data);
            setMessages(response.data);
            // console.log(token);
            setMailToken(jwtDecode(token).sub);
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    useEffect(() => {
        // console.log(mailToken);
    }, [mailToken]);

    useEffect(() => {
        // console.log(idUserConnected);
    }, [idUserConnected]);

    useEffect(() => {
        // console.log(utilisateurDejaParler);
    }, [utilisateurDejaParler]);

    const getIdUserConnecteByEmail = async (email) => {
        try {
            const response = await api.get(`/login/email / ${email}`);
            const data = response.data;
            setIdUserConnected(data.idutilisateur);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {

        // console.log("script ooo");
        const handleFilterBtnClick = () => {
            const dashboardPanel = document.querySelector('.dashboard-panel');
            dashboardPanel.classList.toggle('is-active');
        };

        const closeMenu = document.querySelector('.close-menu');
        closeMenu.addEventListener('click', () => {
            const dashboardPanel = document.querySelector('.dashboard-panel');
            dashboardPanel.classList.remove('is-active');
        });

        const filterBtn = document.querySelector('.contact');
        filterBtn.addEventListener('click', handleFilterBtnClick);

        // Nettoie les écouteurs d'événements lors du démontage du composant
        return () => {
            filterBtn.removeEventListener('click', handleFilterBtnClick);
            closeMenu.removeEventListener('click', () => {
                const dashboardPanel = document.querySelector('.dashboard-panel');
                dashboardPanel.classList.remove('is-active');
            });
        };

    }, []);




    return (
        <>

            <div className="dashboard is-full-height">
                <div className="dashboard-panel is-scrollable has-background-white">
                    <header className="dashboard-panel-header">

                    </header>
                    <div className="dashboard-panel-content">
                        <div className="buttons is-right">
                            <a className="delete close-menu"></a>
                        </div>
                        <div className="list has-hoverable-list-items has-overflow-ellipsis" style={{ '--length': 25 }}>
                            {utilisateurDejaParler.map((user, index) => (
                                <ListConversation key={index} onClickConversation={handleConversationClick} userDetails={user} />
                            ))}
                        </div>
                    </div>
                </div>



                <div className="dashboard-main is-scrollable hero">
                    <nav className="navbar is-transparent hero-head has-background-white-bis pt-1">
                        <div className="navbar-brand">
                            <a className="navbar-item ml-6 contact">
                                <span className="icon has-text-info">
                                    <i className="fa-solid fa-list"></i>
                                </span>
                            </a>
                            <div className="navbar-item list">
                                <div className="list-item">
                                    <div className="list-item-image">
                                        <figure className="image is-24x24">
                                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png
" alt="" />
                                        </figure>
                                    </div>
                                    <div className="list-item-content">
                                        <div className="list-item-title has-text-info">{nomInterlocuteur}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <main className="hero-body px-0">
                        <div className="content pt-6">
                            {messages.map((message, index) => (
                                <Message key={index} m={message} idUser={idUserConnected} />
                            ))}
                        </div>
                    </main>

                    <footer className="hero-foot p-3 has-background-white-bis">
                        <div className="field is-grouped">
                            <div className="control">
                                <div className="file is-centered is-info">
                                    <label className="file-label">
                                        <input className="file-input" type="file" />
                                        <span className="file-cta">
                                            <span className="file-icon">
                                                <i className="fa-regular fa-image"></i>
                                            </span>
                                            <span className="file-label">
                                                Fichier
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="control is-expanded">
                                <input type="text" className="input is-rounded" placeholder="Aa" value={message} onChange={handleInputChange} />
                            </div>
                            <div className="control">
                                <button className="button is-ghost" style={{ textDecoration: "none" }} onClick={sendMessage}>
                                    <span className="icon">
                                        <i className="fa-solid fa-paper-plane fa-lg"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default MessageEntreUser;