import { client } from "@/apolloClient/apollo";
import { getSearch } from "@/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";

const Search = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(getSearch, {
    variables: { query: router.query.search },
  });
  const factRef = useRef<HTMLParagraphElement[]>([]);
  const getSearchFact = () => {
    console.log(data);
    client.refetchQueries({
      include: [getSearch],
    });
  };

  return (
    <>
      <h1 className="text-[50px] mr-auto">
        Results for: {router.query.search}
      </h1>
      <div className="w-full columns-5 gap-1">
        {data &&
          data.search.map(
            (
              item: { id: string; value: string; icon_url: string },
              index: number
            ) => (
              <div
                className="category-wrapper w-[290px] mb-[10px] border-2 text-white"
                key={item.id}
              >
                <div className="p-5 h-full flex flex-col overflow-hidden">
                  <div className="h-full flex items-center">
                    <p
                      className="fadeX-in"
                      ref={(e) => {
                        factRef.current.splice(
                          1,
                          index,
                          e as HTMLParagraphElement
                        );
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
};

export default Search;
