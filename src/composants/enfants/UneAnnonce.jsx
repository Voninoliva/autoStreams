import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
export default function UneAnnonce({data}) {
    const voiture = data.annonce.voiture;
    // console.log(data.annonce);
    const imageRenders = () =>{
        return voiture.photos.map((detail,index)=>(
            <div className={`item-${index+1}`}  key={index}>
                <figure className="image is-4by3"  key={index}>
                    <img src={detail}
                        alt="Placeholder image" key={index} />
                </figure>
            </div>
        ));
    }
    return (
        <>
            <div className="tile is-parent is-4">
                <a className="tile is-child card" href={`/detailAnnonce/${data.annonce.idannonce}`}>
                    <div className="card-image">
                        <div className="carousel" style={{ overflowX: 'hidden' }}>
                            {imageRenders()}
                        </div>
                    </div>
                    <div className="card-content p-3">
                        <div className="list has-visible-pointer-controls has-overflow-ellipsis">
                            <div className="list-item">
                                <div className="list-item-content">
                                    <div className="list-item-title has-text-info">{voiture.modele.nommodele} de {voiture.modele.marque.nommarque}</div>
                                    <div className="list-item-description help">{data.annonce.descri}</div>
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
        </>
    );
}