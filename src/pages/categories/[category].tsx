import { client } from "@/apolloClient/apollo";
import { getCategory } from "@/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";

const Categories = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(getCategory, {
    variables: { query: router.query.category },
  });
  const factRef = useRef<HTMLParagraphElement>(null);
  const getRandomCategoryFact = () => {
    client.refetchQueries({
      include: [getCategory],
    });
  };

  return (
    <div>
      <p>{router.query.category}</p>
      <div className="category-wrapper w-[500px] h-[250px] rounded-lg border-2 text-white">
        {data && (
          <div className="p-5 h-full flex flex-col overflow-hidden">
            <div className="h-full flex items-center">
              <p className="fadeX-in" ref={factRef}>
                {data.categories.value}
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
                    getRandomCategoryFact();
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
    </div>
  );
};

export default Categories;
