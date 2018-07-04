import React, { Component } from "react";
import API from "../../utils/API";
class Articles extends Component {
    state = {
        savedArticles: [],
        searchedArticles: [], 
    };

    componentDidMount() {
        this.loadSavedArticles();
        this.loadSearchedArticles("Trump");
    }

    loadSearchedArticles = (searchField) => {
        API.searchArticles(searchField)
        .then(res => {
            res.data.response.docs.forEach(nytArticle => {
                let newArticle = {
                    title : nytArticle.headline.main,
                    date : nytArticle.pub_date,
                    url : nytArticle.web_url
                };
                this.setState(prevState => ({
                    searchedArticles: [...prevState.searchedArticles, newArticle]
                }))
            });
        })
        .catch(err => console.log(err));
    };

    loadSavedArticles = () => {
        API.getArticles()
        .then(res => this.setState({ savedArticles: res.data }))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h1>Searched Articles On My List</h1>
                {this.state.searchedArticles.length ? (
                    <ul>
                    {this.state.searchedArticles.map((searchedArticle,index) => (
                        <li key={"searchedArticle-" + index}>
                        <a href={"/articles/" + searchedArticle._id}>
                            <strong>
                            {searchedArticle.title}, {searchedArticle.date}
                            </strong>
                        </a>
                        </li>
                    ))}
                    </ul>
                ) : (
                    <h3>No Search Results to Display</h3>
                )}
                <h1>Saved Articles On My List</h1>
                {this.state.savedArticles.length ? (
                    <ul>
                    {this.state.savedArticles.map(savedArticle => (
                        <li key={savedArticle._id}>
                        <a href={"/articles/" + savedArticle._id}>
                            <strong>
                            {savedArticle.title}, {savedArticle.date}
                            </strong>
                        </a>
                        </li>
                    ))}
                    </ul>
                ) : (
                    <h3>No Results to Display</h3>
                )}
            </div>
        )
    }
}

export default Articles;
