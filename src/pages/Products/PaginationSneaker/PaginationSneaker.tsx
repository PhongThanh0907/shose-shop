import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CardSneaker from "../CardSneaker";
import "./paginationsneaker.scss";

interface Props {
  items: any;
}

const PaginationSneaker = (props: Props) => {
  const { items } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOfSet, setItemOfSet] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const endOfSet = itemOfSet + itemsPerPage;
    setCurrentItems(items.slice(itemOfSet, endOfSet));
    setPageCount(Math.ceil(items.length / itemsPerPage));
    console.log(currentItems);
  }, [itemOfSet, itemsPerPage, items]);

  const handlePageClick = (event: any) => {
    const newOfset = (event.selected * itemsPerPage) % items.length;
    setItemOfSet(newOfset);
  };

  const selectItem = (brandName: string) => {
    const result = currentItems.filter((itemsNike: { brand: string }) => {
      return itemsNike.brand === brandName;
    });
    setCurrentItems(result);
    console.log(selectItem);
  };

  return (
    <>
      <div className="Sneaker__Item">
        {currentItems.map(
          (
            item: {
              hinhAnh: string;
              tenGiay: string;
              giaGiay: number;
              brand: string;
            },
            index: number
          ) => {
            return (
              <div key={index}>
                <CardSneaker
                  cardName={item.tenGiay}
                  cardImg={item.hinhAnh}
                  cardPrice={item.giaGiay}
                />
              </div>
            );
          }
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        // renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
      <button onClick={() => selectItem("nike")}>CliclMe</button>
    </>
  );
};

export default PaginationSneaker;
