import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar(props) {
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
            <Route path="/gossiping" component={() => 
              <BoardContent board="Gossiping" articles={props.articles} />} />
            <Route exact path="/nba" component={() => 
              <BoardContent board="NBA" articles={props.articles} />}  />
            <Route exact path="/music" component={() => 
              <BoardContent board="Music" articles={props.articles} />} />
            <Route exact path="/add" component={() => 
              <WritingBox boards={props.boards} postArticle={props.postArticle} />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function BoardContent(props) {
  return (
    <div>
      <h1>{props.board}</h1><br />
      {
        props.articles.map((article,i) => {
          return article.board == props.board
            ? <Article key={i} article={article} /> : null
        })
      }
    </div>
  );
}

function Article(props) {
  return(
    <fieldset>
      <legend>{props.article.title}</legend>
      <br />
      {props.article.content}
    </fieldset>
  );
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
          <legend>Write A New Article</legend><br />
          <label htmlFor="board">Board : </label>
          <select id="board" name="board" onChange={this.handleChange}>
            {content}
          </select><br /><br />
          <label htmlFor="title">Title : </label>
          <input type="text" id="title" name="title"
            onChange={this.handleChange} /><br /><br />
          <label htmlFor="content">Content : </label><br />
          <textarea id="content" name="content" style={textareaStyle}
            onChange={this.handleChange} /><br /><br />
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