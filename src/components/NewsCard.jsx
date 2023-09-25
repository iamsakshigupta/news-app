import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsCard = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9796962f8b0f43398523fd4a4b557f70&page=${page}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < Math.ceil(totalResults / 20)) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className='max-w-7xl px-4 mx-auto py-5 flex flex-col'>
        <h2 className='font-bold dark:text-white text-2xl'>Top Headlines</h2>
        <div className='flex flex-wrap my-7'>
          {loading ? (
            <p className='font-semibold text-xl'>Loading...</p>
          ) : (
            articles.map((element) => (
              <div className='w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-4' key={element.url}>
                <NewsItem title={element.title} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            ))
          )}
        </div>
        <div className='text-center my-10'>
          <button
            disabled={page <= 1}
            className={`px-5 py-2 mx-2 ${page <= 1 ? 'bg-gray-300 text-gray-500' : 'bg-red-500 text-white hover:bg-red-700'} rounded-lg`}
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            className={`px-5 py-2 mx-2 ${page >= Math.ceil(totalResults / 20) ? 'bg-gray-300 text-gray-500' : 'bg-red-500 text-white hover:bg-red-700'} rounded-lg`}
            onClick={handleNextClick}
            disabled={page >= Math.ceil(totalResults / 20)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
