import React from "react";
import Button from "../Button/index"

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={`mostpicked-${index}`}
              className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}
                  <span className="font-weight-light">per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="stretched-link d-block text-white"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

{
  /* <div className="item column-4 row-2">
  <div className="card">Card1</div>
</div>
<div className="item column-4 row-1">
  <div className="card">Card2</div>
</div>
<div className="item column-4 row-1">
  <div className="card">Card3</div>
</div>
<div className="item column-4 row-1">
  <div className="card">Card4</div>
</div>
<div className="item column-4 row-1">
  <div className="card">Card5</div>
</div> */
}

{
  /* <div className="row">
<div className="col-4">
  <div className="card h-100">Card 1</div>
</div>
<div className="col-8">
  <div className="row mb-3">
    <div className="col-6">
      <div className="card">Card 2/</div>>
    </div>
    <div className="col-6">
      <div className="card">Card 3</div>
    </div>
  </div>
  <div className="row">
    <div className="col-6">
      <div className="card">Card 4</div>
    </div>
    <div className="col-6">
      <div className="card">Card 5</div>
    </div>
  </div>
</div>
</div> */
}
