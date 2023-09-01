import NavBar from "../components/NavBar";
import arrow from "../assets/arrow.svg";
import video from "../assets/Video.svg";
import LearnpianowithAI from "../assets/LearnpianowithAI.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className=" h-screen bg-[#F0EFE8] font-moulpali leading-none ">
      <NavBar />
      <header className=" flex min-h-screen items-center gap-5 justify-around max-w-[1050px] m-auto">
        <div className="flex flex-col items-center text-center">
          <img src={LearnpianowithAI} alt="" />
          <h2 className="text-[50px] ">try for free</h2>
          <p className=" uppercase mt-3">
            Unlock the future of piano learning with Harmoni. Start your musical
            journey today!
          </p>
          <div className=" flex mt-5  items-center justify-center">
            <Link to="/ai">
              <button className="bg-[#5F9EFD] border border-black w-[180px] font-semibold rounded-full px-5 h-[50px] flex items-center justify-center">
                TRY NOW
              </button>
            </Link>
            <img src={arrow} alt="" />
          </div>
        </div>
        <img src={video} alt="" />
      </header>
    </div>
  );
};

export default LandingPage;
