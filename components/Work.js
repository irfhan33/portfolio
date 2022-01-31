import PortoItem from "./PortoItem";

export default function Work() {
  return (
    <>
      <section className="bg-primary py-20 px-4 md:px-0" id="work">
        <div className="container mx-auto">
          <span className="text-oren tracking-widest font-regular">
            PORTFOLIO
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mt-3 md:mt-6">
            Latest Work
          </h1>

          <div className="flex mt-5 -mx-3 flex-wrap">
            <PortoItem
              title="Bilu Travel"
              image="/art1.png"
              category="Web Development"
            />
            <PortoItem
              title="Pohon Kebaikan"
              image="/art2.png"
              category="Web Development"
            />
            <PortoItem
              title="Kadinsulsel.id"
              image="/art3.png"
              category="Web Development"
            />
            <PortoItem
              title="MMS Kadin Sulsel"
              image="/art4.png"
              category="Web Development"
            />
            <PortoItem
              title="E - Canteen"
              image="/art5.png"
              category="Web Development"
            />
            <PortoItem
              title="Form Karyawan"
              image="/art6.png"
              category="Web Development"
            />
          </div>
        </div>
      </section>
    </>
  );
}
