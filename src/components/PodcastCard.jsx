import React from "react";
import { formatDate } from "../utils/formatDate";

/**
 * Podcast preview card
 * @param {Object} podcast - Podcast data
 * @param {Function} onClick - Callback when card is clicked
 */
const PodcastCard = ({ podcast, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(podcast)}>
      <img src={podcast.image} alt={`${podcast.title} cover`} />
      <h3>{podcast.title}</h3>
      <p>{podcast.seasons} season{podcast.seasons > 1 ? "s" : ""}</p>
      <div className="tags">
        {podcast.genreNames?.map((g, idx) => (
          <span key={idx} className="tag">{g}</span>
        ))}
      </div>
      <p className="updated-text">{formatDate(podcast.updated)}</p>
    </div>
  );
};

export default PodcastCard;