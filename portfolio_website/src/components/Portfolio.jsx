import React from "react";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full h-screen bg-gradient-to-b from-black
  to-green-600 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-centerw-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          impedit animi, nisi quos, dicta odio provident sequi cupiditate vero
          nemo commodi accusantium molestiae dolor? Placeat a dolores tenetur
          quibusdam sequi et eos quam expedita quaerat optio numquam provident
          velit ex, fugit est distinctio nobis. Repellat voluptatibus accusamus
          quam obcaecati exercitationem.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam
          quae voluptatum atque magnam, rerum aliquid tempore iusto doloribus
          nulla nesciunt aspernatur impedit harum temporibus libero consequuntur
          repellat tempora repellendus dignissimos, deserunt ab aperiam eum
          minus? Aut quaerat natus consequatur, vel eligendi dignissimos id
          officia, quisquam obcaecati quo voluptatibus! Nam?
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
