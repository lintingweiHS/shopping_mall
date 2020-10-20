import React, { Component } from "react";
import Icon from "@/components/Icon";
import axios from "_lib/axios.js";
import qs from "query-string";
import { Carousel, Tabs } from "antd-mobile";
import "./index.scss";
import Goodbuy from './goodBuy'
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
      tabs: [
        { title: "商品详情", key: "t1" },
        { title: "商品规格", key: "t2" },
        { title: "商品评价", key: "t3" },
      ],
      tab: "t1",
      showMoreOption: true,
      resStr: null,
      sbzRegion: { label: "上海 静安区 城区", value: "2_2817_51973" },
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
        axios
          .$Get("api/store/product/description/" + this.state.id, null, {
            hideLoading: true,
          })
          .then((res) => {
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
  tabsChange = (e) => {
    this.setState({
      tab: e.key,
    });
  };
  optionName() {
    let productOption;
    if (
      !this.state.goods.variant_option ||
      (this.state.goods.variant_option &&
        this.state.goods.variant_option.length == 0) ||
      !this.state.goods.sku_map
    ) {
      this.showMoreOption = false;
      return false;
    }
    for (const key in this.state.goods.sku_map) {
      if (this.state.goods.sku_map.hasOwnProperty(key)) {
        const element = this.state.goods.sku_map[key];
        if (element === this.state.goods.product_id) {
          productOption = key;
        }
      }
    }
    if (!productOption) {
      this.showMoreOption = false;
      return;
    }
    var option_array = productOption
      .split(";")
      .filter((str) => str != "")
      .map((str) => str.split(":"));
    var resStr = "";

    option_array.forEach((element) => {
      var optionValues = this._getOptionById(element[0]);
      optionValues["option_value"].forEach((optionValue) => {
        if (optionValue.option_value_id == element[1]) {
          resStr += optionValue.name;
        }
      });
      resStr += " ";
    });
    resStr = resStr.trim();
    return (resStr + ", " + this.state.num + "件")
  }
  _getOptionById(id) {
    var option;
    this.state.goods.variant_option.forEach((element) => {
      option = element;
    });
    return option;
  }
  render() {
    return (
      <div className="shop-detail">
        <Carousel
          autoplay
          infinite
        >
          {this.state.goods.images.map((val) => (
            <img
              key={val}
              src={val.image}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
              onLoad={() => {
                window.dispatchEvent(new Event("resize"));
                this.setState({ imgHeight: "auto" });
              }}
            />
          ))}
        </Carousel>
        <div className="price">
          <div className="money">{this.state.goods.price_format}</div>
          <div className="jd">{this.state.goods.orig_url_text}</div>
        </div>
        <div className="product-name">
          <span>{this.state.goods.identify_type}</span>
          {this.state.goods.name}
        </div>
        <div className="item-group">
          <div className="group">
            <div className="title">编号</div>
            <div className="value">{this.state.goods.extra && this.state.goods.extra.sku}</div>
          </div>
          {this.state.showMoreOption && <div className="group">
            <div className="title">选择规格</div>
            <div className="value">{this.optionName()}</div>
          </div>}
          <div className="group">
            <div className="title">配送至</div>
            <div className="value">{this.state.sbzRegion.label}</div>
          </div>
          <div className="descs">
            {this.state.goods.extra && this.state.goods.extra.is_self_text && (
              <span className="desc">
                <Icon iconName="iconjinakangbaoicons17" />
                {this.state.goods.extra.is_self_text}
              </span>
            )}
            {this.state.goods.extra && this.state.goods.extra.factory_ship_text && (
              <span className="desc">
                <Icon iconName="iconjinakangbaoicons17" />
                {this.state.goods.extra.factory_ship_text}
              </span>
            )}
            {this.state.goods.extra && this.state.goods.extra.afterservice_text && (
              <span className="desc">
                <Icon iconName="iconjinakangbaoicons17" />
                {this.state.goods.extra.afterservice_text}
              </span>
            )}
            {this.state.goods.extra && this.state.goods.extra.return_goods_text && (
              <span className="desc">
                <Icon iconName="iconjinakangbaoicons17" />
                {this.state.goods.extra.return_goods_text}
              </span>
            )}
            {this.state.goods.extra && this.state.goods.extra.thwa_text && (
              <span className="desc block">
                <Icon iconName="iconjinakangbaoicons17" />
                {this.state.goods.thwa_text}
              </span>
            )}
          </div>
        </div>

        <Tabs
          tabs={this.state.tabs}
          initialPage={this.state.tab}
          tabBarActiveTextColor="#db3d3c"
          animated={false}
          useOnPan={false}
          onChange={this.tabsChange}
          tabBarUnderlineStyle={{ display: "none" }}
        ></Tabs>
        <div className="item_desc">
          {this.state.tab === "t1" && (
            <div
              className="goods-detail"
              dangerouslySetInnerHTML={{ __html: this.state.description.description }}
            ></div>
          )}
          {this.state.tab === "t2" && (
            <div className="item-specific-wrap">
              <div id="specific" ref="specific">
                <div className="specific-title">
                  <span className="line"></span>
                  <div>包装清单</div>
                  <span className="line"></span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: this.state.description.wareQD }}></div>
                <div className="specific-title">
                  <span className="line"></span>
                  <div>商品参数</div>
                  <span className="line"></span>
                </div>
                <div
                  className="table-wrap"
                  dangerouslySetInnerHTML={{ __html: this.state.description.param }}
                ></div>
              </div>
            </div>
          )}
        </div>
        <Goodbuy />
      </div>
    );
  }
}
