import '../assets/css/bulma/css/bulma.min.css';
import '../assets/css/mystyle.css';
import '../assets/css/style.css';
export default function Menu(){
    return (
        <>
        <div className="pageloader is-info"></div>
        <header className="has-navbar-fixed-top">
        <nav className="navbar is-fixed-top is-transparent has-background-light">
            <div className="container is-fluid">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu" id="menu">
                    <div className="navbar-end">
                        <a className="navbar-item is-tab is-hidden-desktop sign-in">
                            Mon profil
                        </a>
                        <a className="navbar-item is-tab is-hidden-desktop">
                            Mes favoris
                        </a>
                        <a className="navbar-item is-tab is-hidden-desktop" href="message.html">
                            Mes messages
                        </a>
                        <div className="navbar-item">
                            <div className="field">
                                <div className="control has-icons-left is-expanded">
                                    <input type="text" placeholder="Rechercher ici" className="input is-light is-rounded"/>
                                    <span className="icon is-small is-left is-clickable">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-item is-hidden-touch">
                            <div className="buttons is-right">
                                <div className="button is-rounded is-light has-text-info sign-in">
                                    <span className="icon">
                                        <i className="fa-regular fa-user fa-lg"></i>
                                    </span>
                                </div>
                                <div className="button is-rounded is-light has-text-info">
                                    <span className="icon">
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    </span>
                                </div>
                                <a href="message.html" className="button is-rounded is-light has-text-info">
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
        </>
    );
}