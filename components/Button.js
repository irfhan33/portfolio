export default function Button({ title, variant, className }) {
  const variants = {
    outline: "border border-white",
    fill: "bg-oren",
  };

  const pickedVariant = variants[variant];
  return (
    <>
      <a
        className={`cursor-pointer uppercase text-white font-black text-sm -2 px-8 py-3 inline-block rounded-md ${className} ${pickedVariant}`}
      >
        {title}
      </a>
    </>
  );
}
