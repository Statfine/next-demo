import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from 'react';

const Detail: NextPage = () => {
  const router = useRouter();
  const [id] = useState(router.query.id)
  console.log("router", router);
  return <div>Detail: {id}</div>;
};

export default Detail;
