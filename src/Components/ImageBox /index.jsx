const ImageBox = ({width, heigth, image, alt}) => {
return (
  <img src={image} alt={alt} className={`w-[${width}] h-[${heigth}] rounded-lg`} />
);
}
export {ImageBox}