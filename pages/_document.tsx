/*
 * @Description:
 * @Author: shaojia
 * @Date: 2021-12-02 15:35:59
 * @LastEditTime: 2021-12-02 15:38:34
 * @LastEditors: shaojia
 */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="zh-CN">
        <Head>
          <meta name="description" content="next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
