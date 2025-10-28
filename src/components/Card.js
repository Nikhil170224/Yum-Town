const Card = (props) => {
  const { resobj } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines } = resobj;

  // Swiggy image CDN base URL
  const imgBaseURL = "https://media-assets.swiggy.com/swiggy/image/upload/";

  return (
    <div className="res-card">
      <img
        src={imgBaseURL + cloudinaryImageId}
        alt={name}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <ul>
        <li style={{ fontWeight: "bold", fontSize: "20px" }}>{name}</li>
        <li style={{ fontSize: "16px" }}>
          ⭐ {avgRating} • {sla?.slaString}
        </li>
        <li style={{ color: "gray", fontSize: "14px" }}>
          {cuisines?.join(", ")}
        </li>
      </ul>
    </div>
  );
};

export default Card;
