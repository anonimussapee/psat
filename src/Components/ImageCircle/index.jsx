const ImageCircle = ({size, image, alt, classes}) => {
return (
  <img src={image} alt={alt} className={`${classes} w-[${size}] h-[${size}] rounded-full object-cover`} />
);
}
export {ImageCircle}