

const Message = ({ m, idUser }) => {

    return (
        <>
            <article key={m.idmessage} className="media">
                {m.idsend === idUser ? (
                    <>
                        <div className="media-content">
                            <div className="message is-info is-pulled-right">
                                <p className="message-body">
                                    {m.description}
                                </p>
                            </div>
                        </div>
                        <div className="media-right mx-0">
                            <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/128x128.png" className="is-rounded" alt="Profile" />
                            </figure>
                        </div>
                    </>
                    
                ) : (
                    <>
                        <div className="media-left mx-0">
                            <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/128x128.png" className="is-rounded" alt="Profile" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="message is-pulled-left">
                                <p className="message-body">
                                    {m.description}
                                </p>
                            </div>
                        </div>
                    </>
                    
                )}
                
            </article>
        </>
    );
};

export default Message;