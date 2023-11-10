import Image from "next/image";
import "./Header.css";
import BgBanner from "@/public/bg_01.jpg";
import SearchForm from "@/components/forms/SearchForm/SearchForm";

const Header = () => {
  return (
    <header>
      <Image src={BgBanner} alt="bg" fill placeholder="blur" priority />
      <div className="header_container">
        <div className="header_content">
          <h1>
            Great Images <span className="text-gradient-1">Shared to the community</span> by creators around
            the globe!
          </h1>
          <div className="header_search">
            <SearchForm />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
