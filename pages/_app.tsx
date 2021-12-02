import "antd/dist/antd.css";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  dayjs.locale('zh-cn');
  return <ConfigProvider locale={zhCN}><div className="nextClass"><Component {...pageProps} /></div></ConfigProvider>;
}

export default MyApp;
