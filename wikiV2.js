import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Wiki extends React.Component {
  state = {
    searchTerm: "",
    newData: []
  };

  componentDidMount() {
    axios
      .get(
        "https://en.wikipedia.org//w/api.php?action=opensearch&origin=*&format=json&search=hello"
      )
      .then(res => {
        const searchTerm = res.data[0];
        const resultA = res.data[1];
        const resultB = res.data[2];
        const resultC = res.data[3];
        const newData = [];
        resultA.map(title => {
          newData.push({});
          return (newData[resultA.indexOf(title)].title = title);
        });
        resultB.map(description => {
          return (newData[
            resultB.indexOf(description)
          ].description = description);
        });
        resultC.map(link => {
          return (newData[resultC.indexOf(link)].link = link);
        });
        this.setState({ searchTerm, newData });
      });
  }

  render() {
    return <div>Hello</div>;
  }
}

ReactDOM.render(<Wiki />, document.querySelector("#root"));