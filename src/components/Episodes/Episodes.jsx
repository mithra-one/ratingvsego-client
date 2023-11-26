import React, { useState, useEffect } from "react";
import s from "./Episodes.module.scss";
import axios from "axios";
import defaultThumb from "../../assets/imgs/default.jpg";
import Youtube from "../../assets/icons/youtube.svg?react";
import EpisodesSkeleton from "../Skeletons/EpisodesSkeleton";

const Episodes = () => {
  const [isEpisodesLoading, setIsEpisodesLoading] = useState(false);
  const [episodesLoadingError, setEpisodesLoadingError] = useState(null);

  const [videos, setVideos] = useState([]);
  const [thumbnailUrls, setThumbnailUrls] = useState([]);

  useEffect(() => {
    async function fetchEpisodes() {
      setIsEpisodesLoading(true);
      try {
        const list1 = await axios(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=PLK_Sw5jaVAfGLDNJKoybn3MF9ULKE9cwy&key=${
            import.meta.env.VITE_GOOGLE_API_SECRET
          }`
        );

        const list2 = await axios(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=PLK_Sw5jaVAfEcllgCi0-h173xr2A9z4bh&key=${
            import.meta.env.VITE_GOOGLE_API_SECRET
          }`
        );
        const mergedLists = [...list1.data.items, ...list2.data.items];
        const filteredVideos = mergedLists.filter((video) => {
          return !video.snippet.title.includes("Private video");
        });
        const latestVideos = filteredVideos
          .slice(-3)
          .sort((a, b) => {
            const dateA = new Date(a.snippet.publishedAt);
            const dateB = new Date(b.snippet.publishedAt);
            return dateA - dateB;
          })
          .reverse();
        setVideos(latestVideos);

        const thumbnailPromises = latestVideos.map(async (video) => {
          const mediumThumbnail = video.snippet.thumbnails.medium;
          return mediumThumbnail ? mediumThumbnail.url : defaultThumb;
        });

        Promise.all(thumbnailPromises).then((urls) => {
          setThumbnailUrls(urls);
        });
        setIsEpisodesLoading(false);
      } catch (err) {
        setIsEpisodesLoading(false);
        setEpisodesLoadingError(err);
      }
    }

    fetchEpisodes();
  }, []);

  return (
    <div className={s.episodes}>
      {isEpisodesLoading ? (
        <EpisodesSkeleton />
      ) : (
        videos.length > 0 && (
          <>
            <ul className={s.list}>
              {videos.map(({ id, snippet = {} }, index) => {
                const { title, resourceId = {} } = snippet;
                const thumbnailSrc = thumbnailUrls[index];
                const thumbnailWidth = "320px";
                const thumbnailHeight = "203px";

                return (
                  <li key={id} className={s.card}>
                    <a
                      href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        width={thumbnailWidth}
                        height={thumbnailHeight}
                        src={thumbnailSrc || defaultThumb}
                        alt=""
                      />
                      <h3>{title}</h3>
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="https://www.youtube.com/@shakulin_vasya/playlists"
              target="_blank"
              rel="noreferrer"
              className={s.youtubeButton}
            >
              <Youtube />
              <span>Смотреть все выпуски</span>
            </a>
          </>
        )
      )}
      {episodesLoadingError && (
        <div className={s.serverError}>{episodesLoadingError}</div>
      )}
    </div>
  );
};

export default Episodes;
