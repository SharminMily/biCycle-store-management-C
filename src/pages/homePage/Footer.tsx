const Footer = () => {
  return (
    <div className=" bg-black text-white p-4 text-black  bottom-0 left-0 w-full ">
      <p className="text-center">
        © {new Date().getFullYear()}  <span className="font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-red-600"> BICYCLE</span> || All Rights Reserved
      </p>
     
    </div>
  );
};

export default Footer;
