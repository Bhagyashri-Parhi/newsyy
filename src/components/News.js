// import React, { Component } from 'react'
import React,{useEffect,useState} from 'react'
import NewsItem from '../components/NewsItem';
import  Spinner  from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
    const News=(props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    
    // static defaultProps = {
    //     country: 'in',
    //     pageSize:5,
    //     category:'general'
    //   }
    //   static PropTypes = {
    //     country:PropTypes.string,
    //     pageSize:PropTypes.number,
    //     category:PropTypes.string
    //   }
    //   above static wala code was used for class based componenet

    const  capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      
     

    // constructor(props){
    //     super(props); 
    //     // console.log("hello i am ")
    //     // this.state={
    //     //     // articles:this.articles,
    //     //     articles:[],
    //     //     loading:true,
    //     //     page:1,
    //     //     totalResults:0 
    //     }
    // }

    const updateNews= async ()=>{
        props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1bdf56e5255141fd86e782d88efcee52&page=${page}&pageSize=${props.pageSize}`;
        // this.setState({loading:true});
        setLoading(true);
        let data= await fetch(url);
        props.setProgress(30);
        let parsedData=await data.json()
        props.setProgress(70);
        // console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false);
        // this.setState({articles:parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading:false
        // }) used in class based
        props.setProgress(100);
        
    }
    useEffect(() => {
        document.title=`${capitalizeFirstLetter(props.category)}-NewsApp`;
        updateNews();
    }, [])

    // async componentDidMount(){
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1bdf56e5255141fd86e782d88efcee52&page=1&pageSize=${props.pageSize}`;
    //     // this.setState({loading:true});
    //     // let data= await fetch(url);
    //     // let parsedData=await data.json()
    //     // console.log(parsedData);
    //     // this.setState({articles:parsedData.articles,
    //     //     totalResults: parsedData.totalResults,
    //     //     loading:false})
    //     // this.updateNews();
    // }used in class based 


    // handlePrevClick=async ()=>{
    //     // console.log("prev");
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1bdf56e5255141fd86e782d88efcee52&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    //     // this.setState({loading:true});
    //     // let data= await fetch(url);
    //     // let parsedData=await data.json()
    //     // this.setState({
    //     //     page:this.state.page-1,
    //     //     articles:parsedData.articles,
    //     //     loading:false
    //     // })
    //     this.setState({page:this.state.page - 1})
            // setpage(page+1)
    //     this.updateNews();
    // }
    // handleNextClick=async ()=>{
    //     // console.log("next"); 
    //     // if(! (this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize))){
    //     //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1bdf56e5255141fd86e782d88efcee52&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //     //     this.setState({loading:true});
    //     //     let data= await fetch(url);
    //     //     let parsedData=await data.json()
            
    //     //     this.setState({
    //     //         page:this.state.page+1,
    //     //         articles:parsedData.articles,
    //     //         loading:false
    //     //     })
    //     // }
    //     this.setState({page:this.state.page + 1})
            // setpage(page+1)
    //     this.updateNews();
    // }
    const fetchMoreData = async() => {
        // this.setState({page:this.state.page + 1})
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1bdf56e5255141fd86e782d88efcee52&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        // this.setState({loading:true});
        let data= await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults( parsedData.totalResults)
        // this.setState({
        //     articles:articles.concat(parsedData.articles),
        //     totalResults: parsedData.totalResults})
      };

    // render() {
        return (
            
                <>
                    <h1 className="text-center"style={{margin:'35px 0px',marginTop:"90px"}}>Newsapp-Top from {capitalizeFirstLetter(props.category)} Headlines </h1>
                    {loading && <Spinner/>}
                        <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner/>}
                        >
                        <div className="container my-3">
                         <div className="row">
                    
                    { articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""} newsUrl={element.url?element.url:""} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        
                    </div>
                    })}
                    </div>
                    </div>
                        </InfiniteScroll>
                   
                        {/* <div className="col-md-4">
                            <NewsItem title="myTitle" description="mydesc" />
                           
                        </div>
                        <div className="col-md-4 ">
                            <NewsItem title="myTitle" description="mydesc" />
                           
                        </div> */}

                        {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                        </div> */}
                    </>

                

            
        )
    // }
}
News.defaultProps = {
        country: 'in',
        pageSize:5,
        category:'general'
      }
      News.propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
      }

export default News
