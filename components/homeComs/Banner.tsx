/*
 * @Description: banner
 * @Author: shaojia
 * @Date: 2021-12-02 19:11:07
 * @LastEditTime: 2021-12-02 19:23:37
 * @LastEditors: shaojia
 */
import React from "react";
import QueueAnim from "rc-queue-anim";
import { Button } from "antd";
import styled from "styled-components";

type BaseInfoProps = {
  className?: string;
};

const Banner: React.FC<BaseInfoProps> = ({ className = "home-banner" }) => {
  return (
    <Layout>
      <div className="home-layout">
        <QueueAnim
          className={`${className}-content-wrapper`}
          delay={300}
          ease="easeOutQuart"
        >
          <h1 key="h2">极简制作</h1>
          <p key="p">为您提供专业的云上建站服务，满足不同行业的个性化需求</p>
          <span key="button">
            <Button
              type="primary"
              onClick={() => {
                window.location.href = "/activity/home";
              }}
            >
              开始使用
            </Button>
          </span>
        </QueueAnim>
        <div className={`${className}-image-wrapper`}>
          <img src="../../static/images/clip_log.png" alt="logo" />
        </div>
      </div>
    </Layout>
  );
};

export default Banner;


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

  ellipse {
      transform-box: fill-box;
    }
    .home-layout {
      height: 100%;
      display: flex;
      align-items: center;
      padding-top: 0;
      text-align: left;
    }
    .home-banner-content-wrapper,
    .home-banner-image-wrapper {
      width: 50%;
      display: inline-block;
    }
    .home-banner-content-wrapper {
      height: 178px;
      margin-bottom: 40px;
    }
    h1 {
      font-size: 38px;
      line-height: 46px;
      margin-bottom: 16px;
      font-weight: normal;
      color: fade(#000, 85);
    }
    p {
      margin-bottom: 40px;
      font-size: 20px;
      line-height: 28px;
      color: fade(#000, 43);
    }
    span {
      display: inline-block;
    }
    button {
      width: 168px;
      height: 48px;
      font-size: 20px;
    }
    .home-banner-image-wrapper {
      text-align: center;
      margin-top: -120px;
    }
`;
