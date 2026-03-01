import React, { useState, useMemo } from "react";
import PodcastGrid from "./components/PodcastGrid";
import { usePodcasts } from "./hooks/usePodcasts";
import { format } from "date-fns";

const App = () => {
  const { podcasts, loading, error } = usePodcasts();
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortOption, setSortOption] = useState("latest");

  const handleCardClick = (podcast) => setSelectedPodcast(podcast);
  const handleCloseModal = () => setSelectedPodcast(null);

  const allGenres = useMemo(() => {
    const genres = podcasts.flatMap((pod) => pod.genreNames || []);
    return ["All", ...new Set(genres)];
  }, [podcasts]);

  const filteredPodcasts = useMemo(() => {
    let result = [...podcasts];

    // Search by title
    if (searchTerm) {
      result = result.filter((pod) =>
        pod.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by genre
    if (selectedGenre !== "All") {
      result = result.filter((pod) =>
        pod.genreNames?.includes(selectedGenre)
      );
    }

    // Sort
    if (sortOption === "latest") {
      result.sort((a, b) => new Date(b.updated) - new Date(a.updated));
    } else if (sortOption === "oldest") {
      result.sort((a, b) => new Date(a.updated) - new Date(b.updated));
    } else if (sortOption === "az") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [podcasts, searchTerm, selectedGenre, sortOption]);

  return (
    <>
      <header className="app-header">
        <h1>🎙️ UNMUTED</h1>

        <div className="filters">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {allGenres.map((genre, idx) => (
              <option key={idx} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="az">A–Z</option>
          </select>
        </div>
      </header>

      <div className="app-container">
        <PodcastGrid
          podcasts={filteredPodcasts}
          loading={loading}
          error={error}
          onCardClick={handleCardClick}
        />
      </div>

      {selectedPodcast && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>

            <h2>{selectedPodcast.title}</h2>

            <img
              src={selectedPodcast.image}
              alt={`${selectedPodcast.title} cover`}
            />

            <p>{selectedPodcast.description}</p>

            {/* GENRES VISIBLE IN MODAL */}
            <div className="tags">
              {selectedPodcast.genreNames?.map((g, idx) => (
                <span key={idx} className="tag">
                  {g}
                </span>
              ))}
            </div>

            <p className="updated-text">
              Updated: {format(new Date(selectedPodcast.updated), "PPP, p")}
            </p>

            <h3>Seasons</h3>
            <ul className="season-list">
              {selectedPodcast.seasonDetails.map((s, idx) => (
                <li key={idx} className="season-item">
                  <strong>{s.title}</strong> – {s.episodes} episodes
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default App;