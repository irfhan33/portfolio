import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <section className="bg-primary pb-16">
        <div className="container px-4 md:px-0 mx-auto">
          <Navbar />
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-6/12 md:order-none">
              <span className="text-oren tracking-widest">HI, MY NAME IS</span>
              <div className="md:w-9/12 py-2 lg:py-6">
                <h1 className="text-white text-5xl lg:text-7xl font-extrabold">
                  Irfan Muhammad
                </h1>
              </div>
              <div className="md:w-9/12">
                <p className="text-white text-base font-regular text-opacity-60 leading-relaxed lg:leading-loose mb-8">
                  I am Front-End Web Developer that design my own project and
                  convert it into a website. I am specialized and experienced in
                  design Website UI Designs with User Experience in focus.
                </p>
              </div>
              <Button title="see my work" variant="fill" link="work" />
            </div>
            <div className="md:w-6/12 md:order-none">
              <img src="/pic.png" className="md:w-[90%] w-[70%] mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
