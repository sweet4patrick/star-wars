import { useEffect, useState } from "react";
import { Container, Box, Pagination } from "@mui/material";
import { Loading, Nav, SearchForm, SearchList, Error } from "./components";
import { API_LISTS } from "./constants";
import axios from "axios";

function App() {
  const [category, setCategory] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async (api) => {
    try {
      const { data } = await axios.get(api);
      setLoading(false);
      setError(false);
      if (!data?.results?.length) return setItems([]);
      const pageCount = Math.ceil(data.count / 10);
      setTotalPage(pageCount);
      setItems(data?.results);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (!category) return;
    const apiURL = searchKey
      ? `${API_LISTS[category]}?search=${searchKey}&page=${currentPage}`
      : `${API_LISTS[category]}?page=${currentPage}`;
    setLoading(true);
    getData(apiURL);
  }, [category, searchKey, currentPage]);

  const onChangeCategory = (category) => {
    setCurrentPage(1);
    setCategory(category);
  };

  const onChangeKey = (search) => {
    setCurrentPage(1);
    setSearchKey(search);
  };

  return (
    <Box>
      <Nav />
      <Container maxWidth="lg">
        <SearchForm
          handleChangeCategory={onChangeCategory}
          handleChangeSearch={onChangeKey}
        />
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <>
            <SearchList items={items} category={category} />
            {!!items?.length && (
              <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
                <Pagination
                  count={totalPage}
                  page={currentPage}
                  onChange={(e, page) => setCurrentPage(page)}
                />
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}

export default App;
