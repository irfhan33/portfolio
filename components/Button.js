export default function Button({ title, variant, className, link }) {
  const variants = {
    outline: "border border-white",
    fill: "bg-oren",
  };

  const links = {
    resume: "/Irfan Muhammad Resume.pdf",
    work: "#work",
  };

  const pickedLink = links[link];

  const pickedVariant = variants[variant];
  return (
    <>
      <a
        href={pickedLink}
        className={`cursor-pointer uppercase text-white font-black text-sm -2 px-8 py-3 inline-block rounded-md ${className} ${pickedVariant}`}
      >
        {title}
      </a>
    </>
  );
}
