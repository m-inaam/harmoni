import NavBar from "../components/NavBar";
import { IoSend } from "react-icons/io5";
import image from "../assets/image.png";

const Ai = () => {
  return (
    <div className=" h-screen bg-[#F0EFE8] font-moulpali leading-none text-[12px] ">
      <NavBar />
      <div className=" flex min-h-screen items-center gap-5 justify-around max-w-[1050px] m-auto">
        <div className=" bg-white min-w-[400px] p-5 grid gap-5 rounded-lg">
          <div className=" grid  gap-2">
            <div className=" bg-[#1D74F5] p-2 w-[80%] text-white rounded-r-full rounded-tl-full">
              Can you teach me how to play a C minor?
            </div>
            <div className=" rounded-l-full rounded-tr-full w-[80%] ml-auto bg-black text-white p-2">
              Sure! Here’s how you can play a C minor chord...
            </div>
            <img className=" w-[80%] ml-auto" src={image} alt="" />
          </div>
          <div className=" grid gap-2">
            <div className="flex items-center h-[40px] border gap-2 p-2 rounded-full">
              <input
                type="text"
                placeholder="Type your message..."
                className=" bg-transparent flex-1  focus:outline-none"
              />
              <IoSend />
            </div>
            <div className=" gap-4 flex">
              <button className=" bg-[#1D74F5] text-white p-2 rounded-full">
                Another chord in the same key
              </button>
              <button className=" bg-[#1D74F5] text-white p-2 rounded-full ">
                C minor scale
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ai;
