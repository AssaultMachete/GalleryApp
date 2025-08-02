import Gallery from "../Components/Gallery";

const title = "Karen Kujou Gallery";
const karGallery = [
  {
    src: "/public/Kujou.Karen.(Kiniro.Mosaic).full.4075816.jpg",
    alt: "Karen Kujou Pic",
  },
  {
    src: "/public/Kujou.Karen.(Kiniro.Mosaic).full.4075768.jpg",
    alt: "Karen Kujou Pic",
  },
  {
    src: "/public/Kujou.Karen.(Kiniro.Mosaic).full.3244370.jpg",
    alt: "Karen Kujou Pic",
  },
  {
    src: "/public/Kujou.Karen.(Kiniro.Mosaic).full.2855116.jpg",
    alt: "Karen Kujou Pic",
  },
  { src: "/public/Kiniro.Mosaic.1024.1890019.webp", alt: "Karen Kujou Pic" },
  { src: "/public/Kiniro.Mosaic.full.2612650.jpg", alt: "Karen Kujou Pic" },
  { src: "/public/Kiniro.Mosaic.full.2757482.jpg", alt: "Karen Kujou Pic" },
  {
    src: "/public/Kujou.Karen.(Kiniro.Mosaic).full.1894936.jpg",
    alt: "Karen Kujou Pic",
  },
  { src: "/public/Kiniro.Mosaic.full.3025561.jpg", alt: "Karen Kujou Pic" },
  { src: "/public/Kiniro.Mosaic.full.3885493.jpg", alt: "Karen Kujou Pic" },
  { src: "/public/Kiniro.Mosaic.full.3051906.png", alt: "Karen Kujou Pic" },
  {
    src: "/public/Kujou.Karen.(Kiniro.Mosaic).full.2612642.jpg",
    alt: "Karen Kujou Pic",
  },
  {
    src: "/public/Kiniro.Mosaic.Thank.you!!.full.3344466.jpg",
    alt: "Karen Kujou Pic",
  },
  {
    src: "/public/Kujou.Karen.(Kiniro.Mosaic).full.2672372.png",
    alt: "Karen Kujou Pic",
  },
];
const imgClassName =
  "border-4 border-solid border-amber-500 hover:scale-110 hover:shadow-lg hover:shadow-amber-700 w-85 m-5 duration-300 ease-in-out";

const KarenGallery = () => {
  return (
    <Gallery images={karGallery} title={title} imgClassName={imgClassName} />
  );
};

export default KarenGallery;
