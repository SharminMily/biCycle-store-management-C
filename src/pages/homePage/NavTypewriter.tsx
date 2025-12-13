// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Typewriter from "typewriter-effect";

const NavTypewriter = () => {
  return (
    <div className="">
      <div className="bg-black py-2 text-white text-center font-medium text-lg">
        <div className="">
          <h1
            className="font-normal flex justify-center align-middle gap-2 text-center" // Tailwind equivalent for your styles text-[#00ff85]
          >
            BICYCLE{" "}
            <span className="font-bold text-red-500">
              {" "}
              {/* Neon green from your image */}
              <Typewriter
                options={{
                  loop: true, // or set to a number like 5
                  delay: 80, // typing speed per character (lower = faster)
                  deleteSpeed: 40, // deleting speed (lower = faster)
                  cursor: "_",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("BE THE BOSS")
                    .pauseFor(2000)
                    .deleteAll(30) // fast delete
                    .typeString("RIDE FAST")
                    .pauseFor(1500)
                    .deleteChars(4) // delete only "FAST"
                    .typeString("HARDER")
                    .pauseFor(1800)
                    .deleteAll()
                    .typeString("OWN THE ROAD")
                    .pauseFor(2000)
                    .start();
                }}
              />
            </span>{" "}
            {/* BIKES */}
          </h1>
        </div>
        {/* <p>
          Up to 70% off sale | Now on
        </p>
        <p>Shop now</p> */}
      </div>
    </div>
  );
};

export default NavTypewriter;
