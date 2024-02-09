import axios from 'axios';

const api = axios.create({
    baseURL: 'https://back-autostream-production.up.railway.app/'
})

const ListConversation = ({ onClickConversation, userDetails }) => {

    const handleClick = (userReceive) => {
        console.log(userReceive)
        onClickConversation(userReceive);
    };


    return (
        <>
            <a className="list-item" onClick={() => handleClick(userDetails)}>
                <div className="list-item-image">
                    <figure className="image is-48x48">
                        <img className="is-rounded" src="https://via.placeholder.com/128x128.png?text=Image" />
                    </figure>
                </div>

                <div className="list-item-content">
                    <div className="list-item-title has-text-info is-flex is-justify-content-space-between">
                        <span>{userDetails.nomutilisateur}</span>
                    </div>
                </div>
            </a>
        </>
    );
};

export default ListConversation;