import React from "react";

const PlaylistItem = ({
  categoryId,
  description,
  id,
  image,
  name,
  path,
  handlePlaylist,
}) => {
  return (
    <div className="playlists__item" data-testid="playlist">
      <div
        className="playlists__item__link"
        onClick={() => handlePlaylist(path)}
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
