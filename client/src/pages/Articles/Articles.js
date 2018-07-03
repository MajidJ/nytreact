import React, { Component } from "react";
import API from "../../utils/API";

class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
        <div>
            <h1>Articles On My List</h1>
            {this.state.articles.length ? (
                <ul>
                {this.state.articles.map(article => (
                    <li key={article._id}>
                    <a href={"/articles/" + article._id}>
                        <strong>
                        {article.title}, {article.date}
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
