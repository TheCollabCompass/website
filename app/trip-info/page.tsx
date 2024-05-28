import React from "react";
import LiveTripCard from "../Components/LiveTripCard";
import TripInfoTripCard from "../Components/TripInfoTripCard";
import TripInfoCollaboratorCard from "../Components/TripInfoCollaboratorCard";

const page = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto h-full" >
            <div className="h-full flex items-center justify-center m-4" >
                <div  className="w-full flex flex-wrap justify-around">
                <div><TripInfoTripCard /></div>
                <div><TripInfoCollaboratorCard /></div>

                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default page;
