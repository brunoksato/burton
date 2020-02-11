import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import useWindowSize from "../../hooks/useWIndowSize";

const SectionThree = ({ channels, totalCount }) => {
  const size = useWindowSize();

  const [perPage, setPerPage] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pageNumber, setPageNumber] = useState(0 / perPage);

  const handlePageClick = selected => {
    const offset = Math.ceil(selected * perPage);
    const pageNumber = offset / perPage;

    setOffset(offset);
    setPageNumber(pageNumber);

    return;
  };

  useLayoutEffect(() => {
    if (size.width <= 600) {
      setPerPage(10);
    } else if (size.width <= 800 && size.width > 600) {
      setPerPage(20);
    } else if (size.width >= 800) {
      setPerPage(30);
    }
  }, [size]);

  return (
    <Container>
      <h2>
        Quidd is the most trusted digital collectibles partner for over 300 of the world’s best
        brands.
      </h2>
      <List>
        {channels.map((item, idx) => (
          <Item key={idx}>
            <img
              src={`https://imager-prod.onquidd.com/channels/${item["img-11"]}`}
              loading="lazy"
            />
            <div>{item.t}</div>
          </Item>
        ))}
      </List>
      <ListMobile>
        {channels.slice(offset, offset + perPage).map((item, idx) => (
          <Item key={idx}>
            <img
              src={`https://imager-prod.onquidd.com/channels/${item["img-11"]}`}
              loading="lazy"
            />
            <div>{item.t}</div>
          </Item>
        ))}
      </ListMobile>
      {!totalCount ? (
        <></>
      ) : (
        <Paginate>
          <div id="react-paginate">
            {totalCount && Math.ceil(totalCount / perPage) > 1 && (
              <ReactPaginate
                previousLabel={""}
                nextLabel={""}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(totalCount / perPage)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={100}
                forcePage={pageNumber}
                onPageChange={({ selected }) => handlePageClick(selected)}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            )}
          </div>
        </Paginate>
      )}
    </Container>
  );
};

export default SectionThree;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 9em 2.1em;
  h2 {
    font-size: 52px;
    padding: 0 3em;
    line-height: 52px;
    margin-top: 56px;
    letter-spacing: 0.01em;
    color: #6b10d6;
    font-weight: 700;
    text-align: center;
    font-family: "LarsseitBold";
  }
  @media (max-width: 992px) {
    h2 {
      line-height: 40px;
      font-size: 40px;
      padding: 0;
    }
  }
  @media (max-width: 568px) {
    h2 {
      margin-top: 0;
      font-size: 1.19rem;
      line-height: 24px;
      margin-bottom: 20px;
    }
    padding: 5em 2.1em;
  }
`;

const List = styled.div`
  margin-top: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    margin-top: 2em;
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  padding: 0.5em 0;
  display: flex;
  align-items: center;
  img {
    border-radius: 10em;
    height: 45px;
    width: 45px;
    margin-right: 1em;
    margin-bottom: 0em;
  }
  div {
    margin-top: 0.3em;
    width: 200px;
  }
`;

const ListMobile = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }

  grid-template-rows: repeat(10, 70px);

  margin-left: 2em;
  margin-top: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: flex-start;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    margin-top: 2em;
    grid-template-columns: 1fr;
  }
`;

const Paginate = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }

  > div {
    display: flex;
    justify-content: center;
  }

  .break-me {
    background: green;
  }

  #react-paginate ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    padding-left: 0px;
    margin-left: 0;
    @media (max-width: 600px) {
      display: grid;
      grid-template-columns: 20px 20px 20px 20px 20px 20px 20px 20px 20px;
      grid-gap: 10px;
    }
  }

  #react-paginate li {
    display: inline-block;
    padding: 8px 0px 0 0;
    margin: 0 10px;
    cursor: pointer;
    border-radius: 20em;
    background: #ccc;
    height: 20px;
    width: 20px;
    border: 4px solid #ccc;
    color: transparent;
  }

  #react-paginate li > a {
    padding: 3px 1px;
    outline: 0;
  }

  #react-paginate .break a {
    cursor: default;
    font-size: 0 !important;
  }

  #react-paginate li:first-of-type {
    display: none;
  }

  #react-paginate li:last-of-type {
    display: none;
  }

  #react-paginate .active {
    background-color: transparent;
    color: transparent;
    border: 4px solid #6b11d5;
  }
`;
