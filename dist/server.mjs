import {
  registerForEvent
} from "./chunk-TIJQ6ORT.mjs";
import {
  errorHandler
} from "./chunk-MGJCYVD6.mjs";
import {
  checkIn
} from "./chunk-Y3AMPYIE.mjs";
import {
  createEvent
} from "./chunk-XBZAR4OE.mjs";
import "./chunk-SZWDL3CN.mjs";
import {
  getAttendeeBadge
} from "./chunk-N5TCGXF3.mjs";
import {
  getEventAttendees
} from "./chunk-ITQYA47G.mjs";
import {
  getEvent
} from "./chunk-CZLF2R5U.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in constru\xEDda durante a NLW Unite da RocketSeat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
export {
  app
};
