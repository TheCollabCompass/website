import Image from "next/image";
import MainBar from "./Components/MainNav";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <section className="backgroundImage">
        {/* <MainBar /> */}

        <div className="md:container md:mx-auto hero-container ">
          <div className="p-2">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-8">
              <div className="text-4xl font-bold">
                Discover the Majestic Mountains of Pakistan with Influencers You
                Love
              </div>

              <p className="text-2xl mt-4">
                Are you ready to embark on the adventure of a lifetime? we
                specialize in creating unforgettable travel experiences to
                Pakistan's most stunning mountain destinations, guided by the
                influencers you love and follow. Whether you're a thrill-seeker,
                nature enthusiast, or just looking to escape the everyday
                hustle, our curated trips offer something for everyone.
              </p>
              <div className="mt-2">
              <Button color="success" variant="shadow">
                Explore
              </Button>
            </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
