import React from "react";

import "./Playlists.scss";

import { Loading } from "../../components/index";

import PlaylistItem from "./PlaylistItem";

const Playlists = ({
  data,
  categoryName,
  categoryId,
  isLoading,
  path,
  handlePlaylist,
}) => {
  return (
    <div className="playlists" data-testid="playlists">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="playlists__content">
          {data.map((playlist) => (
            <PlaylistItem
              key={playlist.id}
              image={playlist.images[0].url}
              name={playlist.name}
              id={playlist.id}
              description={playlist.description}
              categoryId={categoryId}
              path={playlist.tracks.href}
              handlePlaylist={handlePlaylist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Playlists;
