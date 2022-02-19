import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import Listitem from "./listItems";
import { useRef } from "react";

const List = (props) => {
  const listRef = useRef();
  let distance = 0;

  const handleClick = (direction) => {
    if (direction === "left" && distance > 0) {
      distance -= 200;

      listRef.current.style.transform = `translateX(-${distance}px)  `;
      console.log(distance);
    }
    if (direction === "right" && distance <=1200) {
      distance += 200;
      listRef.current.style.transform = `translateX(-${distance}px)  `;
      console.log(distance);
    }

    console.log(distance);
  };
  return (
    <div className="list">
      <span className="listTitle">{props.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />{" "}
      </div>
    </div>
  );
};

export default List;
