/*
 * @Description:
 * @Author: shaojia
 * @Date: 2021-12-02 17:36:46
 * @LastEditTime: 2021-12-02 18:37:31
 * @LastEditors: shaojia
 */
import styled from "styled-components";

export const HeaderDiv = styled.div`
  background-color: #FFF;
  position: relative;
  z-index: 10;
  height: 64px;
  #logo {
    overflow: hidden;
    padding-left: 40px;
    float: left;
    line-height: 64px;
    text-decoration: none;
    height: 64px;
    img {
      display: inline;
      vertical-align: middle;
      margin-right: 16px;
      height: 64px;
    }
    span {
      outline: none;
      font-size: 24px;
      line-height: 28px;
    }
  }

  .header-meta {
    padding-right: 40px;
  }

  #menu {
    float: right;
    overflow: hidden;
    height: 64px;
    .ant-menu {
      line-height: 60px;
    }
    .ant-menu-horizontal {
      border-bottom: none;
      & > .ant-menu-item {
        border-top: 2px solid transparent;
        &:hover {
          border-bottom: 2px solid transparent;
        }
      }
      & > .ant-menu-item-selected {
        border-bottom: 2px solid transparent;
        a {
        }
      }
    }
  }

  #preview {
    padding-top: 17px;
    float: right;
    margin-left: 32px;
    button {
      border-radius: 32px;
    }
  }

  #preview-button {
    .ant-btn {
    }
  }
`;
