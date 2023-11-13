const ProfCard = ({ titulo, detalle, img }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure class="image is-3by3">
          <img src={img} alt="" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{titulo}</p>
        <p class="subtitle is-6">{detalle}</p>
      </div>
    </div>

    // <div>
    //   <img src={img} alt="" />
    //   <h3>{titulo}</h3>
    //   <h4>{detalle}</h4>
    // </div>
  );
};

export default ProfCard;
