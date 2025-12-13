const Footer = () => {
  return (
    <div className=" bg-black text-white p-4 text-black  bottom-0 left-0 w-full ">
      <p className="text-center">
        © {new Date().getFullYear()} My Website | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
