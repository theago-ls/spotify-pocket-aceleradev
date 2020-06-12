import React from "react";

const PlaylistItem = ({ categoryId, description, id, image, name, path }) => {
  function handlePlaylist() {
    console.log(id);
  }
  return (
    <div className="playlists__item" data-testid="playlist">
      <div
        className="playlists__item__link"
        onClick={handlePlaylist}
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="playlists__item__description">
        <strong>{name}</strong>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default PlaylistItem;
