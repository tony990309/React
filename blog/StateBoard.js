import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Gossipings : [],
      NBAs : [],
      Musics : []
    }
    this.refreshArticle = this.refreshArticle.bind(this);
  }

  componentDidMount() {
    console.log("N DID MOUNT!");
    this.refreshArticle();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("N DID UPDATE!");
    if(this.props.articles != null && prevProps.articles != this.props.articles) {
      this.refreshArticle();
    }
  }

  refreshArticle() {
    this.props.articles.map((article) => {
      switch(article.board) {
        case "Gossiping":
          this.state.Gossipings.push(article);
          this.setState({
            Gossipings : this.state.Gossipings
          });
          return;
        case "NBA":
          this.state.NBAs.push(article);
          this.setState({
            NBAs : this.state.NBAs
          });
          return;
        case "Music":
          this.state.Musics.push(article);
          this.setState({
            Musics : this.state.Musics
          });
          return;
        default:
          return;
      }
    });
    console.log("N DID REFRESH!");
  }

  render() {
    var ulStyle = {
      listStyleType: "none",
    };

    return (
      <div>
        <h1>Welcome to My Blog!</h1>
        <Router>
          <div>
            <h2>Menu</h2>
            <ul style={ulStyle}>
              <li><Link to={"/gossiping"}>Gossiping</Link></li>
              <li><Link to={"/nba"}>NBA</Link></li>
              <li><Link to={"/music"}>Music</Link></li>
              <li><Link to={"/add"}>Add Article</Link></li>
            </ul>
            <hr />
            <Switch>
              <Route path="/gossiping" component={() => <BoardContent board="Gossiping" articles={this.state.Gossipings} />} />
              <Route exact path="/nba" component={() => <BoardContent board="NBA" articles={this.state.NBAs} />}  />
              <Route exact path="/music" component={() => <BoardContent board="Music" articles={this.state.Musics} />} />
              <Route exact path="/add" component={() => <WritingBox boards={this.props.boards} postArticle={this.props.postArticle} />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

class BoardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles : this.props.articles
    };
  }

  render() {
    var content = this.state.articles.map((article,i) => 
      <Article key={i} article={article} />
    );
    return (
      <div>
        <h1>{this.props.board}</h1>
        <h2>Articles</h2><br />
        {content}
      </div>
    );
  }
}

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article : this.props.article
    }
  }
  render() {
    return(
      <fieldset>
        <legend>{this.state.article.title}</legend>
        <br />
        {this.state.article.content}
      </fieldset>
    );
  }
}

class WritingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: "Gossiping",
      title: "",
      content: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const article = {
      board: this.state.board,
      title: this.state.title,
      content: this.state.content,
    };
    console.log("Board:" + article.board + ", Title:" + article.title + ", Content:" + article.content);
    this.props.postArticle(article);
  }

  handleChange(event) {
    switch(event.target.name) {
      case "board":
        this.setState({ board: event.target.value });
        return;
      case "title":
        this.setState({ title: event.target.value });
        return;
      case "content":
        this.setState({ content: event.target.value });
        return;
      default:
        return;
    }
  }

  render() {
    var textareaStyle = {
      width: "90%",
      height: "200px",
    };
    const options = this.props.boards;
    const content = options.map((board) => <Option key={board} value={board} />);
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Write A New Article</legend>
          <br />
          <label htmlFor="board">Board : </label>
          <select id="board" name="board" value={this.state.board} onChange={this.handleChange}>
            {content}
          </select>
          <br /><br />
          <label htmlFor="title">Title : </label>
          <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
          <br /><br />
          <label htmlFor="content">Content : </label>
          <br />
          <textarea id="content" name="content" style={textareaStyle} value={this.state.content} onChange={this.handleChange} />
          <br /><br />
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    );
  }
}

function Option(props) {
  return <option value={props.value}>{props.value}</option>;
}

function StateBoard({ boards, articles, onClickPost }) {
  return <Navbar boards={boards} postArticle={onClickPost} articles={articles} />;
}

export default StateBoard;