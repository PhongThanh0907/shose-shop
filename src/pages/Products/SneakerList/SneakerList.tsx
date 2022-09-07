import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../app/store";
import { getSneakerList } from "../../../features/Sneaker/sneakersSlice";
import PaginationSneaker from "../PaginationSneaker";

const SneakerList = () => {
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.sneakersSlice
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getSneakerList());
  }, []);

  if (isLoading) {
    // return <Loading />
    return <h1>Loading...</h1>;
  }

  if (error) {
    // return <ErrorMessage />
    return <h1>{error}</h1>;
  }

  const itemNike = (branditem: string) => {
    const result = data.filter((itemsNike) => {
      return itemsNike.brand === branditem;
    });
    console.log(result);
  };

  return (
    <div className="Sneakers__List">
      <PaginationSneaker items={data}/>
    </div>
  );
};

export default SneakerList;
