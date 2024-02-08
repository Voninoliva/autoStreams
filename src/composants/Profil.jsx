export default function Profil({ip}) {
    return (
        <>
        <div className="dashboard is-full-height">
        <div className="dashboard-panel is-small is-scrollable has-background-info">
            <header className="dashboard-panel-header">

            </header>
            <div className="dashboard-panel-content">

            </div>
            <footer className="dashboard-panel-footer">
                <div className="field">
                    <div className="control is-expanded">
                        <button className="button is-fullwidth is-danger">
                            Se deconnecter
                        </button>
                    </div>
                </div>
            </footer>
        </div>
        <div className="dashboard-main is-scrollable">
            <section className="section pt-6 mt-6 p-5">
                <div className="content is-flex is-justify-content-space-between filter has-background-white py-3">
                    <h3>
                        Annonces
                    </h3>
                    <div className="field">
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
                                        <a href="#" className="dropdown-item">
                                            En vedette
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Les plus récents
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
                <div className="tile is-ancestor columns is-multiline">
                    <div className="tile is-parent is-4">
                        <a className="tile is-child card">
                            <div className="card-image">
                                <div className="carousel"  style={{ overflowX: "hidden" }}>
                                    <div className="item-1">
                                        <figure className="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png"
                                                alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="item-2">
                                        <figure className="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png"
                                                alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="item-3">
                                        <figure className="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png"
                                                alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content p-3">
                                <div className="list has-visible-pointer-controls has-overflow-ellipsis">
                                    <div className="list-item">
                                        <div className="list-item-content">
                                            <div className="list-item-title has-text-info">List item</div>
                                            <div className="list-item-description help">List item description</div>
                                        </div>

                                        <div className="list-item-controls has-text-info">
                                            <span className="icon is-clickable like">
                                                <i className="fa-regular fa-heart fa-lg"></i>
                                            </span>
                                            <span className="icon is-clickable">
                                                <i className="fa-regular fa-paper-plane fa-lg"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="tile is-parent is-4">
                        <a className="tile is-child card">
                            <div className="card-image">
                                <div className="carousel"  style={{ overflowX: "hidden" }}>
                                    <div className="item-1">
                                        <figure className="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png"
                                                alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="item-2">
                                        <figure className="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png"
                                                alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="item-3">
                                        <figure className="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png"
                                                alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content p-3">
                                <div className="list has-visible-pointer-controls has-overflow-ellipsis">
                                    <div className="list-item">
                                        <div className="list-item-content">
                                            <div className="list-item-title has-text-info">List item</div>
                                            <div className="list-item-description help">List item description</div>
                                        </div>

                                        <div className="list-item-controls has-text-info">
                                            <span className="icon is-clickable like">
                                                <i className="fa-regular fa-heart fa-lg"></i>
                                            </span>
                                            <span className="icon is-clickable">
                                                <i className="fa-regular fa-paper-plane fa-lg"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
        <div className="dashboard-panel is-small has-background-white is-hidden-touch pl-0">
            <header className="dashboard-panel-header">

            </header>
            <div className="dashboard-panel-content">
                <div className="has-background-info box mt-5" style={{height: "216px"}}></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
        </div>
        </>

    );
}