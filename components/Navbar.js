import Button from "./Button";
import Navlinks from "./Navlinks";
import { useState } from "react";
// import Document from "next/document";
export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="flex items-center py-5">
        <div className="w-2/12">
          <div className="text-2xl font-bold text-white">Fannn</div>
        </div>
        <div className="w-8/12 hidden md:block">
          <Navlinks dir="horizontal" />
        </div>
        <div className="w-2/12 text-right hidden md:block">
          <Button title="resume" variant="outline" link="resume" />
        </div>
        <div className="w-10/12 md:hidden">
          <img
            src="/menufix.svg"
            className="ml-auto cursor-pointer"
            onClick={() => setShow(true)}
          />
        </div>
      </nav>
      <div
        className={`transition-all transition-duration-300 top-0 z-10 pt-7 pl-7 w-full h-full fixed bg-oren md:hidden ${
          show ? " -right-20" : "-right-full"
        }`}
      >
        <div onClick={() => setShow(false)}>
          <Navlinks dir="vertical" />
        </div>
        <Button
          title="resume"
          variant="outline"
          link="resume"
          className="mt-4"
        />
        <img
          src="/x.svg"
          className="absolute top-6 right-24 cursor-pointer"
          onClick={() => setShow(false)}
        />
      </div>
    </>
  );
}
