'use client'
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const ReactSwagger = ({ spec }) => {
  return <SwaggerUI spec={spec} />;
};

export default ReactSwagger;