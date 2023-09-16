import Button from "../Button";
import { Icons } from "../../constants/icons";
import ListImg from "../../assets/List.png";
import showTimes from "../../assets/Two Tickets.png";
import GroupImg from "../../assets/Group 52.png";
import Arrow from "../../assets/Expand Arrow.png";
import useGetUtcTime from "../../Hooks/useGetUtcTime";

// movie details main section

export const formatToUtcDate = (inputDateStr) => {
  const inputDate = new Date(inputDateStr);
  const utcDate = new Date(
    inputDate.getUTCFullYear(),
    inputDate.getUTCMonth(),
    inputDate.getUTCDate(),
    0,
    0,
    0
  );
  const formattedDate = utcDate.toISOString();
  return formattedDate;
};
function MovieDetailsMain({ movie }) {

  return (
    <div className="md:w-[70%]  px-3 overflow-y-scroll main overflow-x-hidden w-[100%]">
      <div className="mt-5 max-w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="movie-poster"
          className="w-full h-[300px] object-cover rounded-lg"
          data-testid="movie-poster"
        />

        <div className="flex items-center md:text-[16px] text-[10px] gap-1">
          <span data-testid="movie-title" className="flex gap-4 md:pl-4">
            {movie.title}
          </span>

          <span data-testid="movie-release-date" className="md:px-3">
            {formatToUtcDate(movie.release_date)}
          </span>
          <span data-testid="movie-runtime">{movie.runtime}</span>

          <span className="flex items-center  md:justify-end  text-[10px] md:px-10 pl-4">
            {Icons.star()}
            {Number.parseFloat(movie.vote_average)} | 350k
          </span>
        </div>
        <p
          className="md:text-[15px] font-[300] leading-[30px] text-[13px] my-4"
          data-testid="movie-overview"
        >
          {movie.overview}
        </p>

        {/* <div className=" flex-col md:flex-row flex md:items-center md:gap-5  md:justify-between w-full  font-[500]">
          <div className=" flex-col flex gap-3 md:mt-4 text-[10px] md:text-[17px] md:flex-row mt-4">
            <div className="flex gap-3">
              <span data-testid="movie-release-date">
                {formattedDate(movie.release_date)}
              </span>

              <div>
                <span data-testid="movie-runtime">{movie.runtime}</span>
                <span>min</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] md:text-[17px]">
            <span className="flex items-center  md:justify-end  text-[10px]">
              {Icons.star()}
              {Number.parseFloat(movie.vote_average)} | 350k
            </span>
          </div>
        </div> */}
        <div className="md:flex md:flex-row    w-full md:justify-between gap-5 flex-col ">
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col md:flex-row gap-3">
              <Button className="text-white bg-[#BE123C] rounded p-2 text-[13px] w-[220px]">
                Top rated movie #65
              </Button>
              <div className="border-2 flex items-center justify-between rounded p-1 w-[220px]">
                Awards 9 nominations
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3   mt-5 md:justify-center  md:items-center items-center">
            <Button className="text-white bg-[#BE123C]  flex items-center justify-center w-[200px] gap-2  rounded p-2 text-[14px]">
              <img src={showTimes} alt="show icon" width={20} height={20} />
              See Showtimes
            </Button>
            <Button className="text-black bg-red-200  flex items-center justify-center w-[200px] gap-2  rounded p-2 text-[14px]">
              <img src={ListImg} alt="listicon" />
              More watch options
            </Button>
            <div>
              <img src={GroupImg} alt="gruopimg" width={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsMain;
