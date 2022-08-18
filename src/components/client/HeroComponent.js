import hero_image from "../../assets/hero-bg.jpg";

const HeroComponent = () => {
  return (
    <div
      style={{ backgroundImage: hero_image }}
      className="component-hero flex flex-col justify-center items-center gap-14"
    >
      <h1 className="font-mono font-extrabold text-3xl text-white">
        Your dream home is here!
      </h1>
      <div className="bg-white p-1 rounded-full overflow-hidden">
        <input
          type="search"
          className="w-96 p-2 h-9 border-none outline-none"
        />
        <i className="fas fa-search font-bold mx-6 cursor-pointer"></i>
      </div>
    </div>
  );
};

export default HeroComponent;
