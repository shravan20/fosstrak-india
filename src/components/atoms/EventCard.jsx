import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={
            event.image ||
            "https://is1-ssl.mzstatic.com/image/thumb/Purple111/v4/dd/95/7e/dd957e3a-abd3-da8a-2211-726a67108938/source/256x256bb.jpg"
          }
          alt={event.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event.name}</h2>
        <p>{event.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
