import MovieList from "@/components/allMovies/MovieList";
import BannerMovie from "@/components/mainPageBanner/BannerMovie";


const Page = () => {


  return (
    <div className="h-max bg-black">

      <div>
        <BannerMovie />
      </div>
      <MovieList />
    </div>
  );
};

export default Page;
