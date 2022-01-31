export default function ContactItem({ image, value }) {
  return (
    <>
      <div className="flex items-center mb-5">
        <img src={image} className="mr-2" />
        <p className="text-white text-lg">{value}</p>
      </div>
    </>
  );
}
