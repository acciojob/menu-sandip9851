import React from "react";

function DisplayComponent({ output }) {
  return (
    <div className="menuList">
      {output.map((item) => (
        <div className="list" key={item.id}>
          <div className="image">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="listDescip">
            <div className="listHead">
              <h3>{item.title}</h3>
              <h3>{item.price}</h3>
            </div>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayComponent;
