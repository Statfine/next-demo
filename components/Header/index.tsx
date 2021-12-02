/*
 * @Description: 头
 * @Author: shaojia
 * @Date: 2021-12-02 17:32:07
 * @LastEditTime: 2021-12-02 18:07:44
 * @LastEditors: shaojia
 */
import { Row, Col, Menu, Button, Popover } from "antd";
import * as Style from './style';

export default function Header() {
  return (
    <Style.HeaderDiv id="header" className="header">
      <Row>
        <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
          <div id="logo">
            <span>ANT DESIGN PRO</span>
          </div>
        </Col>
        <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
          <div className="header-meta">
            <div id="preview">
              <a
                id="preview-button"
                target="_blank"
                href="http://preview.pro.ant.design"
                rel="noopener noreferrer"
              >
                <Button icon="eye-o">预览</Button>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Style.HeaderDiv>
  );
}
