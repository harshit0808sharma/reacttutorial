import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import Card from './Card';
import Contents from "./Contents";


ReactDOM.render(
  <>
    <h className='heading_style'>List Of Avengers Movies</h>
    {Contents.map((val) => {
      return(
          <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
          />
      );
    })}
  </>,
  document.getElementById('root')
);

