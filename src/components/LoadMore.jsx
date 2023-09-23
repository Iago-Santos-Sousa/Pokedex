import { useState, useEffect } from "react";

const LoadMore = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://reqres.in/api/users?page=${page}&per_page=2`,
        );
        const json = await res.json();
        setLoading(false);
        setData((prev) => [...prev, ...json.data]);
        setTotalPage(json.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);
  console.log(data);

  return (
    <>
      <div className="user-list">
        <ul>
          {data &&
            data.map((user, index) => (
              <li key={index}>
                <p>
                  {user.first_name} {user.last_name}
                </p>
              </li>
            ))}
        </ul>
      </div>
      {page < totalPage && (
        <button onClick={() => setPage(page + 1)}>
          {loading ? "Loading..." : "Load more"}
        </button>
      )}
    </>
  );
};

export default LoadMore;
