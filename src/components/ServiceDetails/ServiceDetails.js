import React from "react";
import { useParams } from "react-router-dom";
import { MyDB } from "../../DB/DB";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const service = MyDB.services.find((a) => a.id == serviceId);

  return (
    <div className="row row-cols-2 justify-content-center mt-5">
      <div className="col cart border  service-item rounded p-2 mb-3">
        <img src={service.image} className="rounded"></img>
        <div className="m-2 lh-sm">
          <h3 className="">{service.name}</h3>
          <p className="text-muted lh-sm">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
