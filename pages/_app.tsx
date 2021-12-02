import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import zhCN from "antd/lib/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "../styles/globals.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {};

function MyApp({ Component, pageProps }: AppProps) {
  dayjs.locale("zh-cn");
  return (
    <>
      <GlobalStyle />
      <ConfigProvider locale={zhCN}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
}

export default MyApp;
