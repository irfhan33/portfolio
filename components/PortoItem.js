export default function PortoItem({ image, title, category }) {
  return (
    <>
      <div className="w-full sm:w-6/12 md:w-4/12 overflow-hidden relative px-3 mb-5">
        <img src={image} className="w-full rounded" />
        <h1 className="absolute bottom-5 left-6  lg:bottom-10 lg:left-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold">
          {title}
        </h1>
        <p className="absolute left-6 bottom-1 lg:left-10 text-white lg:bottom-4 font-regular lg:text-base text-sm ">
          {category}
        </p>
      </div>
    </>
  );
}
