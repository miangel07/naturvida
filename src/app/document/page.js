import React from "react";
import ReactSwagger from "./react-swagger";
import { ApiDocs } from "../../../libs/swagger";

const SwaggerPage =async () => {
  const spec = await ApiDocs();
  return <ReactSwagger spec={spec} />;
};

export default SwaggerPage;
