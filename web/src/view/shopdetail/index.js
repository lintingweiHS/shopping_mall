import React, { Component } from "react";
import Icon from "@/components/Icon";
import axios from "_lib/axios.js";
import qs from "query-string";
import { Carousel } from "antd-mobile";
import "./index.scss";
export default class shopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      data: ["AiyWuByWklrrUDlFignR", "TekJlZRVCjLFexlOCuWn", "IJOtIlfsYdTyaDTRVrLI"],
      goods: {
        images: [],
      },
      description: {},
      cartInfo: {},
      myScale: 1,
      num: 1,
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
    axios.$Get("api/store/product/" + this.state.id).then((res) => {
      if (res.success) {
        this.setState(
          {
            goods: res.data,
            num: res.data.minimum || 1,
          },
          () => {
            axios.$Get("api/store/product/rt_meta/" + this.state.id).then((res) => {
              const goods = { ...this.state.goods, ...res.data };
              this.setState({
                goods: goods,
                num: goods.minimum || 1,
              });
            });
          }
        );
        axios.$Get("api/store/product/description/" + this.state.id, null, {
          hideLoading: true,
        }).then((res) => {
          this.setState({
            description: res.data,
          });
          if (this.state.description && this.state.description.scale) {
            this.calScale(this.state.description.scale);
          }
        });
        axios.$Get("api/store/cart/quantity", {}, { hideLoading: true }).then((res) => {
          if (res.success) {
            this.setState({
              cartInfo: res.data.total,
            });
          }
        });
      }
    });
  };
  calScale = (base_width) => {
    if (base_width > 0) {
      this.setState({
        myScale: window.screen.width < base_width ? window.screen.width / base_width : 1,
      });
    }
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
        <div className="price">
          {this.state.goods.price_format}
          {this.state.goods.orig_url_text}
        </div>
      </div>
    );
  }
}
