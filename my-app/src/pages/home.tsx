import React from "react";
import ImgMediaCard from "components/ImgMediaCard";
import Img from "Image/001.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="App-header">
        <ImgMediaCard
          imgPath={Img}
          name="Shane"
          description="This is Shane for Hahow-interview test. Click below button to check out my page"
          buttonName="Go to Shane's page"
          buttonAction={() => {
            navigate("/heroes");
          }}
        />
      </header>
    </div>
  );
}
