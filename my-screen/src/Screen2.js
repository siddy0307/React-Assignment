import React from "react";
//import FetchData from "./swapidata";

class Screen2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: " ",
      search: false
    };

    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    fetch("https://swapi.co/api/planets/")
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data.results
        })
      );
  }
  handleSearch(event) {
    var updatedList = this.state.data;
    console.log(updatedList)
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({data: updatedList});
    // this.setState({
    //   value: event.target.value
    // });
  }
  render() {
    console.log(this.state.data)
    return (
      <div>
        <form>
          <label>
            Search:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleSearch}
            />
          </label>
        </form>
        <div>
          {this.state.data.map((planet, index) => (
            <p key={index}>
              {planet.name} - {planet.population}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Screen2;
