import React, { Component } from "react";

import { FilterState } from "./FilterState";

import "./Filter.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Filter extends Component {
  basicStyle = { color: "" };

  onFilterChange = (fs) => {
    this.props.onFilter(fs);
  };

  //filter color:
  getStyle = (styleAsked) => {
    if (styleAsked === this.props.currentFilter) {
      return { color: "#ff6347" };
    } else {
      return { color: "#000" };
    }
  };

  render() {
    return (
      <div className="Filter">
        <span
          onClick={() => this.onFilterChange(FilterState.ALL)}
          style={this.getStyle(FilterState.ALL)}
        >
          All
        </span>
        <span
          onClick={() => this.onFilterChange(FilterState.ACTIVE)}
          style={this.getStyle(FilterState.ACTIVE)}
        >
          Active
        </span>
        <span
          onClick={() => this.onFilterChange(FilterState.COMPLETED)}
          style={this.getStyle(FilterState.COMPLETED)}
        >
          Completed
        </span>
      </div>
    );
  }
}
