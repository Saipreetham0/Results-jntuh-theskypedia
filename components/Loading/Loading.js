import { HashLoader } from "react-spinners";
import LoadingAd from "../../components/Adsense/loadingAd";

const Loading = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-l sm:text-2xl mt-6 mb-6 text-center text-gray-400">
        Relax while the backend fetched the results
      </h1>
      <hr className="sm:w-96 w-48 border-gray-700 mb-6" />
      <div className="flex items-center justify-center">
        <HashLoader color={"#558888"} size={30} css={{ margin: "auto" }} />
      </div>

      <LoadingAd adClient="ca-pub-4870864326886980" adSlot="8973292958" />
    </div>
  );
};

export default Loading;
