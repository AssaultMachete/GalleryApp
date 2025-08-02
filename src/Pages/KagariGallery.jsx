import Gallery from "../Components/Gallery";

const title = "Kagaro (Rewrite) Gallery";
const kagImages = [
  { src: "/public/Kagari.(Rewrite).full.2021409.jpg", alt: "Kagari Pic" },
  { src: "/public/Kagari.(Rewrite).full.2079673.jpg", alt: "Kagari Pic" },
  { src: "/public/Kagari.(Rewrite).full.2435001.jpg", alt: "Kagari Pic" },
  { src: "/public/Kagari.(Rewrite).full.3501799.png", alt: "Kagari Pic" },
  { src: "/public/Kagari.(Rewrite).full.3501822.jpg", alt: "Kagari Pic" },
  { src: "/public/Kagari.(Rewrite).full.4296193.jpg", alt: "Kagari Pic" },
  { src: "/public/Kagari.(Rewrite).full.4296194.jpg", alt: "Kagari Pic" },
  { src: "/public/Kagari.(Rewrite).full.4296196.jpg", alt: "Kagari Pic" },
  { src: "/public/Kagari.(Rewrite).full.4296264.jpg", alt: "Kagari Pic" },
  { src: "/public/Kagari.(Rewrite).full.4501686.png", alt: "Kagari Pic" },
  { src: "/public/Kagari.(Rewrite).full.915366.jpg", alt: "Kagari Pic" },
  { src: "/public/Kagari.(Rewrite).full.649264.jpg", alt: "Kagari Pic" },
];
const imgClassName =
  "border-4 border-solid border-b-gray-800 hover:scale-110 hover:shadow-lg hover:shadow-cyan-950 w-75 m-5 duration-300 ease-in-out";
const KagariGallery = () => {
  return (
    <Gallery images={kagImages} title={title} imgClassName={imgClassName} />
  );
};
export default KagariGallery;
