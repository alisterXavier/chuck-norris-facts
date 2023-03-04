import { client } from "@/apolloClient/apollo";
import { getRandom } from "@/queries";
import { useLazyQuery, useQuery } from "@apollo/client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Random = () => {
  const { loading, error, data } = useQuery(getRandom);
  const factRef = useRef(null);
  const getRandomFact = () => {
    client.refetchQueries({
      include: [getRandom],
    });
  };

  return (
    <div className="random-wrapper w-[500px] h-[250px] rounded-lg border-2 text-white">
      {data && (
        <div className="p-5 h-full flex flex-col overflow-hidden">
          <div className="h-full flex items-center">
            <p className="fadeX-in" ref={factRef}>
              {data.random.value}
            </p>
          </div>
          <div className="w-full mt-auto">
            <button
              className="ml-auto block"
              onClick={() => {
                (factRef.current as unknown as Element).classList.add(
                  "fadeX-out"
                );
                (factRef.current as unknown as Element).classList.remove(
                  "fadeX-in"
                );

                setTimeout(() => {
                  getRandomFact();
                  setTimeout(() => {
                    (factRef.current as unknown as Element).classList.remove(
                      "fadeX-out"
                    );
                    (factRef.current as unknown as Element).classList.add(
                      "fadeX-in"
                    );
                  }, 400);
                }, 500);
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Random;
