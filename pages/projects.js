import Head from 'next/head'

import Layout from "../components/layout";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>캠핑 GO! | 캠핑장 추천</title>
        <meta name="description" content="캠핑 고고 사이트입니다. 원하시는 캠핑을 원하는 날짜에 편리하게 찾을 수 있습니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>프로젝트입니다.</h1>
    </Layout>
  )
}