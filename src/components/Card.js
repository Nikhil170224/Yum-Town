const Card = (props) => {
  const { resobj } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines } = resobj;

  // Swiggy image CDN base URL
  const imgBaseURL = "https://media-assets.swiggy.com/swiggy/image/upload/";

  return (
    <div className="w-52 m-4 p-2 shadow-lg rounded-lg hover:border bg-gray-200 ">
      <img className="rounded-lg"
        src={imgBaseURL + cloudinaryImageId}
        alt={name}
      />

      <ul>
        <li className="font-bold text-xl py-2">{name}</li>
        <li className="text-base">
          ⭐ {avgRating} • {sla?.slaString}
        </li>
        <li className="text-[14px] text-gray-500">
          {cuisines?.join(", ")}
        </li>
      </ul>
    </div>
  );
};

export default Card;
