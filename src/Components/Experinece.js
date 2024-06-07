import React from "react";
import experience from "./data/experience.json";

const Experinece = () => {
  return (
    <>
      <div className="container ex" id="experinece">
        <h1>Experinece</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
              >
                <div className="left">
                  <img src={data.image} alt="" />
                </div>
                <div className="right m-auto">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.start},{data.end},
                    </span>

                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <p style={{ color: "yellow" }}>{data["work-Mode"]}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experinece;
