/*
 * @Description: part1
 * @Date: 2021-12-02 19:24:09
 * @LastEditTime: 2021-12-02 19:32:03
 * @LastEditors: shaojia
 */
import React from "react";
import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Row, Col } from "antd";
import styled from "styled-components";

type BaseInfoProps = {};

export const page1 = [
  {
    title: "轻松建站",
    content: "支持可视化编辑、自由拖拽排版、实时预览、在线访问加速等功能",
    src: "https://gw.alipayobjects.com/zos/rmsportal/MmROsqZndrFBrIspzLlL.png",
  },
  {
    title: "数据分析",
    content: "网站内设有数据监测埋点，助你时刻掌握站点效果，鉴别有效渠道",
    src: "https://gw.alipayobjects.com/zos/rmsportal/ONvKhpRAmkCfdEhkUZkJ.png",
  },
  {
    title: "企业协同",
    content: "企业版支持以团队管理的方式，多人协作完成营销站点，共享资源",
    src: "https://gw.alipayobjects.com/zos/rmsportal/oxmXLgGjCeXfYPcVSbKg.png",
  },
];

const Part1: React.FC<BaseInfoProps> = () => {
  const children = page1.map((d, i) => (
    <QueueAnim
      component={Col as any}
      key={i}
      type="bottom"
      className="col"
      componentProps={{ span: 8 }}
    >
      <div
        key="image"
        className="image"
        style={{ backgroundImage: `url(${d.src})` }}
      />
      <h3 key="h3">{d.title}</h3>
      <p key="p">{d.content}</p>
    </QueueAnim>
  ));
  return (
    <Layout className="home-layout-wrapper home-func-wrapper" id="home-func">
      <h2>功能介绍</h2>
      <i className="line" />
      <OverPack className="home-layout" location="home-func" playScale={0.4}>
        <QueueAnim
          className="home-func"
          type="bottom"
          key="home-func"
          ease="easeOutQuart"
          leaveReverse
        >
          <QueueAnim
            key="content"
            component={Row as any}
            type="bottom"
            componentProps={{ gutter: 171 }}
          >
            {children}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </Layout>
  );
};

export default Part1;

const Layout = styled.div`
  width: 100%;
  height: 720px;
  text-align: center;
  overflow: hidden;
  .home-layout {
    margin: 0 auto;
    width: 1152px;
    padding: 0 24px;
    overflow: hidden;
    height: 100%;
    > div {
      float: left;
      width: 100%;
    }
    .col {
      .content-wrapper {
        border-radius: 4px;
        background: #fff;
        cursor: pointer;
        overflow: hidden;
        position: relative;
      }
    }
  }
  &:nth-of-type(odd) {
    background: #fff;
  }
  &:nth-of-type(even) {
    background-color: #F7F7F7;
  }

    .image {
      height: 240px;
      position: relative;
      background-position: bottom center;
      background-repeat: no-repeat;
      background-size: 90% auto;
      margin-bottom: 62px;
    }
    .col {
      height: 400px;
    }
`;
