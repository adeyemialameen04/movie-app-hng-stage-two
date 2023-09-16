import { useState } from "react";

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

import Button from "./../Button/index";
import ImbImg from "../../assets/imb.png";
import PngItem from "../../assets/PngItem.png";

import useCalculateRating from "../../Hooks/useCalculateRating";
import useGetUtcTime from "../../Hooks/useGetUtcTime";

function MovieCard({ movie }) {
  const [toogleFavoriteIcon, setToggleFavoriteIcon] = useState();

  const { calcMovieRating } = useCalculateRating();

  const { formattedDate } = useGetUtcTime();

  const handleSaveFavorites = () => {
    setToggleFavoriteIcon((prev) => !prev);
  };

  return (
    // movie card
    <div
      className="w-[250px] h-[490px] cursor-pointer"
      data-testid="movie-card"
    >
      <div
        className={` ${
          toogleFavoriteIcon ? "bg-red-500" : "bg-slate-400 "
        } h-5  w-5 rounded-full  flex justify-center items-center   absolute   ml-48 mt-6  cursor-pointer`}
        onClick={handleSaveFavorites}
      >
        {toogleFavoriteIcon ? (
          <MdFavoriteBorder className="text-white text-md     " />
        ) : (
          <MdFavoriteBorder className="text-white text-md     " />
        )}
      </div>

      <img
        data-testid="movie-poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-[250px] h-[370px]"
      />

      <h4
        data-testid="movie-release-date"
        className="text-[12px] leading-[15.62px] my-3"
      >
        {movie.release_date}
      </h4>

      <h2
        className="leading-[23.44px] text-[18px] font-[700]"
        data-testid="movie-title"
      >
        {movie.title}
      </h2>

      <div className="flex gap-8 text-[10px] my-2">
        <div className="flex items-center gap-2">
          <img src={ImbImg} alt="imb-img" />
          <span>850/100</span>
        </div>

        <div className="flex items-center gap-2">
          <img src={PngItem} alt="pngImage" />
          <span>{calcMovieRating(movie.vote_average)}</span>
        </div>
      </div>
      <Link to={`/movies/${movie.id}`}>
        <span className="text-[13px] underline">Continue to view Details</span>
      </Link>
    </div>
  );
}

export default MovieCard;
