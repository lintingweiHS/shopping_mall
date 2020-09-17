import React, { Component } from "react";
import Icon from "@/components/Icon";
import axios from "_lib/axios.js";
import qs from "query-string";
import { Carousel } from "antd-mobile";
export default class shopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: null,
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    };
  }
  componentDidMount() {
    const query = qs.parseUrl(location.search).query;
    console.log(query);
    this.setState({
      product_id: query.id,
    });
  }
  render() {
    return (
      <div className="shop-detail">
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={(index) => console.log("slide to", index)}
        >
          {this.state.data.map((val) => (
              <img
               key={val}
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
          ))}
        </Carousel>
      </div>
    );
  }
}
