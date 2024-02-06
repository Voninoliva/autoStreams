import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import { useEffect, useState } from 'react';
export default function UneAnnonce({ data }) {
    // console.log(data);
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
                                    <div className="list-item-title has-text-info">{voiture.modele.nommodele} de {voiture.modele.marque.nommarque}</div>
                                    <div className="list-item-description help">{data.descri}</div>
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
                </div>
            </div>
        </>
    );
}