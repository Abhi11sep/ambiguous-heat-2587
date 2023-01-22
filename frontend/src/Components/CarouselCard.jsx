import React, { useState } from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarouselCard = () => {
  const [items, setItems] = useState([
    {
      pic: "https://cdn.caratlane.com/media/catalog/product/J/S/JS00811-1YP600_1_lar.jpg",
      price: "47,850",
      strikeoff: "53,590",
      title: "Parni Diamond Mangalsutra",
    },
    {
      pic: "https://cdn.caratlane.com/media/catalog/product/J/R/JR04654-RGP900_1_lar.jpg",
      price: "20,120",
      strikeoff: "22,566",
      title: "Sasha Shimmer Diamond Ring",
    },
    {
      pic: "https://cdn.caratlane.com/media/catalog/product/U/E/UE00004-YG0000_1_lar.jpg",
      price: "10,090",
      strikeoff: "11,125",
      title: "Rhodeus Drop Gold Earrings",
    },
    {
      pic: "https://cdn.caratlane.com/media/catalog/product/J/S/JS00812-1YP600_1_lar.jpg",
      price: "41,963",
      strikeoff: "46,582",
      title: "Maissa Diamond Mangalsutra",
    },
    {
      pic: "https://cdn.caratlane.com/media/catalog/product/J/E/JE04059-YGP900_1_lar.jpg",
      price: "22,563",
      strikeoff: "23,125",
      title: "Classic Leaves Diamond Stud Earrings",
    },
    {
      pic: "https://cdn.caratlane.com/media/catalog/product/J/L/JL04315-1YP900_1_lar.jpg",
      price: "23,856",
      strikeoff: "25,725",
      title: "Estrena Dazzling Diamond Necklace",
    },
    {
      pic: "https://cdn.caratlane.com/media/catalog/product/J/R/JR03769-YGP900_1_lar.jpg",
      price: "21,102",
      strikeoff: "20,659",
      title: "Intertwined Glim Diamond Ring",
    },
    {
      pic: "https://cdn.caratlane.com/media/catalog/product/U/R/UR00355-YG0000_1_lar.jpg",
      price: "14,589",
      strikeoff: "16,180",
      title: "Floret Cutout Gold Band",
    },
  ]);

  return (
    <div style={{ marginTop: "80px" }}>
      <p
        style={{
          textAlign: "left",
          marginLeft: "120px",
          fontSize: "24px",
          fontWeight: "400",
          color: "#33363E",
          marginBottom: "50px",
        }}
      >
        Best of Crystal & Gold
      </p>

      <div
        className="carousel-wrapper"
        style={{ width: "95%", margin: "auto" }}
      >
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <div>
              <img
                style={{
                  border: "1px solid silver",
                  borderRadius: "10px",
                }}
                src={item.pic}
                width="280px"
              />
              <p
                style={{
                  padding: "2px 10px",
                  textAlign: "left",
                  fontWeight: "400",
                  fontSize: "18px",
                  marginTop: "10px",
                  lineHeight: "0px",
                }}
              >
                {" "}
                &#8377; {item.price} &nbsp;{" "}
                <strike style={{ fontSize: "14px" }}>
                  {" "}
                  &#8377; {item.strikeoff}
                </strike>{" "}
              </p>
              <p
                style={{
                  padding: "2px 10px",
                  textAlign: "left",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "0px",
                  lineHeight: "30px",
                  color: "grey",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselCard;
