



import React, {  useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
 
const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.title = `${capitalizeFirstletter(props.category)} - NewsWave`;

    const updateNews = async () => {
        props.setProgress(10);
        // const url =`https://newsapi.org/v2/top-headlines?&apiKey=11610ad56b784378b78a856f8502a1cb&country=${props.country}&category=${props.category}&page=${page+1}&pageSize=${props.pageSize}`;
        const url =`https://newsapi.org/v2/top-headlines?&apiKey=dc2bf05c2b674cc8b6e19e45eb3aadd9&country=${props.country}&category=${props.category}&page=${page+1}&pageSize=${props.pageSize}`;
        
        setPage(page+1);
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    useEffect(() =>{
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const fetchMoreData = async () => {
        const url =`https://newsapi.org/v2/top-headlines?&apiKey=dc2bf05c2b674cc8b6e19e45eb3aadd9&country=${props.country}&category=${props.category}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    return (
        <>
            <h1 className="text-center" style={{ marginTop: "75px", marginBottom:"10px" }}>NewsWave - top {capitalizeFirstletter(props.category)} Headlines</h1>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={totalResults === 0 || articles.length < totalResults}
                loader={<Spinner/>}
            >
                <div className="container my-10">
                    <div className="row">
                        {articles.length > 0 && articles.map((element) => {
                            return <div className="col-md-3 my-3" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                                    description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage}
                                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News;



// latest news api : dc2bf05c2b674cc8b6e19e45eb3aadd9