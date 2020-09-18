import React, { Component } from "react";
import Icon from "@/components/Icon";
import axios from "_lib/axios.js";
import qs from "query-string";
import { Carousel } from "antd-mobile";
import './index.scss'
export default class shopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      data: ["AiyWuByWklrrUDlFignR", "TekJlZRVCjLFexlOCuWn", "IJOtIlfsYdTyaDTRVrLI"],
      goods:{
        images:[]
      }
    };
  }
  componentDidMount() {
    const id = qs.parseUrl(location.search).query.id;
    this.setState(
      {
        id: id,
      },
      () => {
        this.getData();
      }
    );
  }
  getData = () => {
    axios.$Get("api/store/product/rt_meta/" + this.state.id).then((res) => {
      if(res.success){
        this.setState({
          goods:res.data
        })

      }
    });
  };
  render() {
    return (
      <div className="shop-detail">
        <Carousel
          autoplay
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={(index) => console.log("slide to", index)}
        >
          {this.state.goods.images.map((val) => (
            <img
              key={val}
              src={val.image}
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
