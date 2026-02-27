import React, { useState } from "react";
import PodcastGrid from "./components/PodcastGrid";
import { usePodcasts } from "./hooks/usePodcasts";
import { format } from "date-fns";

/**
 * App - Root component for UNMUTED Podcast app.
 *
 * Handles:
 * - Fetching podcast data
 * - Opening/closing modal for podcast details
 * - Passing data to PodcastGrid
 * - Search filter
 */
const App = () => {
  const { podcasts, loading, error } = usePodcasts();
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCardClick = (podcast) => setSelectedPodcast(podcast);
  const handleCloseModal = () => setSelectedPodcast(null);

  const filteredPodcasts = podcasts.filter((pod) =>
    pod.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header className="app-header">
        <h1>🎙️ UNMUTED</h1>
        <input
          type="text"
          placeholder="Search podcasts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <PodcastGrid
        podcasts={filteredPodcasts}
        loading={loading}
        error={error}
        onCardClick={handleCardClick}
      />

      {selectedPodcast && (
        <div className="modal" onClick={handleCloseModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>

            <h2>{selectedPodcast.title}</h2>
            <img
              src={selectedPodcast.image}
              alt={`${selectedPodcast.title} cover`}
            />
            <p>{selectedPodcast.description}</p>

            <div className="tags">
              {selectedPodcast.genres.map((g, idx) => (
                <span key={idx} className="tag">
                  {g}
                </span>
              ))}
            </div>

            <p>
              Updated:{" "}
              {format(new Date(selectedPodcast.updated), "PPP, p")}
            </p>

            <h3>Seasons</h3>
            <ul className="season-list">
              {selectedPodcast.seasonDetails.map((s, idx) => (
                <li key={idx} className="season-item">
                  <strong className="season-title">{s.title}</strong> -{" "}
                  {s.episodes} episodes
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;