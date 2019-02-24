import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

class Wiki extends React.Component {
  state = {
    searchTerm: "",
    results: []
  };

  componentDidMount() {
    axios
      .get(
        "https://en.wikipedia.org//w/api.php?action=opensearch&origin=*&format=json&search=Croatia"
      )
      .then(res => {
        const searchTerm = res.data[0];
        const resultA = res.data[1];
        const resultB = res.data[2];
        const resultC = res.data[3];
        const results = [];
        resultA.map(title => {
          results.push({});
          return (results[resultA.indexOf(title)].title = title);
        });
        resultB.map(description => {
          return (results[
            resultB.indexOf(description)
          ].description = description);
        });
        resultC.map(link => {
          return (results[resultC.indexOf(link)].link = link);
        });
        this.setState({ searchTerm, results });
      });
  }

  render() {
    return (
      <div>
        <h1>Wikipedia Results for {this.state.searchTerm}</h1>
        {this.state.results.map(result => (
          <a
            href={result.link}
            target="_blank"
            key={this.state.results.indexOf(result) + 20}
          >
            <div className="card">
              <p key={this.state.results.indexOf(result)}>{result.title}</p>
              <p key={this.state.results.indexOf(result) + 10}>
                {result.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<Wiki />, document.querySelector("#root"));