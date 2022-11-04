import React from "react";
import { IconCheck } from "~/components/icon";
import TextTour from "~/components/text/TextTour";

const TourPage = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="flex items-center justify-between py-4 font-DMSans lg:mx-auto lg:max-w-7xl">
          <TextTour icon={<IconCheck />}>Best tour price</TextTour>
          <TextTour icon={<IconCheck />}>Best quality</TextTour>
          <TextTour icon={<IconCheck />}>Heartfelt advice</TextTour>
          <TextTour icon={<IconCheck />}>Flexible payment</TextTour>
        </div>
      </div>
      <div className="px-5 py-10 font-DMSans lg:mx-auto lg:max-w-7xl">
        <div className="safe-travel">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          dolore eum, illum nobis minus ipsum ab nihil. Expedita iusto beatae
          quas sed rerum, neque ducimus velit, harum quis sunt at repellat natus
          ad nisi exercitationem? Possimus, vitae. Iste, non quasi. Nesciunt,
          architecto veniam numquam placeat maiores explicabo expedita et.
          Distinctio similique optio blanditiis sequi hic iure id. Pariatur
          mollitia suscipit maxime eligendi vitae. Magnam recusandae fugiat
          obcaecati accusantium suscipit, error sint commodi iusto architecto
          praesentium ab? Consectetur vel odit quia, eaque rerum laborum
          veritatis veniam nulla maxime eveniet, doloremque enim, animi quasi
          atque fuga magni ipsum illo voluptatum. Officia, quam.
        </div>
      </div>
    </div>
  );
};

export default TourPage;
