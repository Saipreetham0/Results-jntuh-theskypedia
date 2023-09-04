import HomeNavLinks from "../components/Home/HomeNavigationLinks";
import Notify from "../components/ui/Notify";
import Maintenance from "../components/Layout/maintance";

export default function Home() {
  return (
    <main className=" text-center flex flex-col items-center mt-16">
      {/* <HomeNavLinks /> */}
      <Maintenance/>

      {/* <Notify/> */}
    </main>
  );
}
