import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        console.log("Hello  I am a constructor ")
        this.state={
            articles:[]
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=9121a200498b4b6998a4cbbe1c66b8ff  ";
        let data = await fetch(url);
        let parsedData = await data.json()
         this.setState({articles:parsedData.articles})
    }
  render() {
    return (
      <div className='container text-center'>
      <div className='row'>
      <div className='col-md-3 my-3'>
      {this.state.articles.map((element)=>{
        return<NewsItem  title= {element.title} description={element.description} ImageUrl={element.urlToImage}/>

      })}
      
      </div>
      </div>
      
              
      </div>
    )
  }
}

export default News
