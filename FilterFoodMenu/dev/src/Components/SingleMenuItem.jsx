const SingleMenuItem = ({ id, title, desc, img, price }) => {
  return (
    <>
      <div className="menu-item">
        <img className="img" src={img} alt={id} />
        <div className="item-price">${price}</div>
        <div className="item-info">
          <h3 className="item-text">{title}</h3>
          {desc}
        </div>
      </div>
    </>
  );
};
export default SingleMenuItem;
