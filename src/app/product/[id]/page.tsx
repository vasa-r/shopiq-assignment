import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const param = (await params).id;
  console.log(param);
  return <div>page</div>;
};

export default page;
