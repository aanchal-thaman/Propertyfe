import React, { useState, useEffect } from 'react';
import useFetch from "../../hooks/useFetch";
import "./PropertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("http://localhost:8800/api/list-property");

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  

  return (
    <div className="pList">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data &&
            data.map((item, i) => (
              <div className="pListItem" key={i}>
                <img src={images[i]} alt="" className="pListImg" />
                <div className="pListContent">
                  <h1>{item?.type}</h1>
                  <h3>{item?.name}</h3>
                  <p>{item?.city}</p>
                  <div className="pListDetails">
                  <p>Rating: {item?.rating}</p>
                  <p>Price: ₹{item?.cheapestPrice}</p>
                  <p>Rooms: {item?.room} BHK</p>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
