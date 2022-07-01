
const BasketCard = ({ id, title, imgSrc, price }) => {
    return (
        <div className="basket-card">
          
            <div className="basket-card__image-container">
                <img className="basket-card__image" src={imgSrc} alt="" />
            </div>
            <div className="basket-card__details-container">
                <p className="basket-card__title">{title}</p>
                <p className="basket-card__price">${price.toFixed(2)}</p>
            </div>
            <div className="basket-card__button-container">
                <button className="basket-card__delete-button btn-primary">
                    <i className="basket-card__delete-button--icon fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    )
}

export default BasketCard;