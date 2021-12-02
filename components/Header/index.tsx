/*
 * @Description: 头
 * @Author: shaojia
 * @Date: 2021-12-02 17:32:07
 * @LastEditTime: 2021-12-02 19:03:09
 * @LastEditors: shaojia
 */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Row, Col, Menu, Drawer } from "antd";
import * as Style from "./style";

export default function Header() {
  const router = useRouter();
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [menuMode, setMenuMode] = useState<any>("horizontal");

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, [])

  const handleResize = () => {
    const width = document.body.clientWidth;
    setMenuMode(width > 740 ? 'horizontal' : 'vertical')
  }

  const handleCloseDrawer = () => setDrawerVisible(false)
  const handleOpenDrawer = () => setDrawerVisible(true)

  const handleJumpHome = () => router.push("/");
  const handleJumpAntd = () => router.push("/team");
  const handleJumpDetail = () => router.push("/detail/123?targe=hi");

  const menu = (
    <Menu mode={menuMode} key="nav">
      <Menu.Item key="home">
        <p onClick={handleJumpHome}>Home</p>
      </Menu.Item>
      <Menu.Item key="docs">
        <p onClick={handleJumpAntd}>antd</p>
      </Menu.Item>
      <Menu.Item key="components">
        <p onClick={handleJumpDetail}>new page</p>
      </Menu.Item>
    </Menu>
  );

  return (
    <Style.HeaderDiv id="header" className="header">
      <Row>
        <Col md={0} sm={2} xs={2}>
          <p onClick={() => {
            drawerVisible ? handleCloseDrawer() : handleOpenDrawer()
          }}>{drawerVisible ? 'close' : 'open'}</p>
        </Col>
        <Col xxl={4} xl={5} lg={8} md={8} sm={22} xs={22}>
          <div id="logo">
          <img src="../../static/images/clip_log.png" alt="logo" />
            <span onClick={handleOpenDrawer}>Title</span>
          </div>
        </Col>
        <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
          {/* <div className="header-meta"> */}
            {menuMode === "horizontal" ? <div id="menu">{menu}</div> : null}
          {/* </div> */}
        </Col>
      </Row>
      <Drawer
          placement="left"
          closable={false}
          onClose={handleCloseDrawer}
          visible={drawerVisible}
        >
           {menuMode === "vertical" ? <div id="menu">{menu}</div> : null}
        </Drawer>
    </Style.HeaderDiv>
  );
}
