// didn't quite get this to work because i was stuck on how to pass the key name
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
        resultA.forEach(function(item) {
          newData.push({});
        });
        function create(arrayName, keyName) {
          arrayName.map(keyName => {
            return (newData[arrayName.indexOf(keyName)].title = keyName);
          });
        }

        create(resultA, "title");
        create(resultB, "description");
        create(resultC, "link");
        console.log(newData);
        this.setState({ searchTerm, newData });
      });
  }

  render() {
    return <div>Hello</div>;
  }
}

ReactDOM.render(<Wiki />, document.querySelector("#root"));
