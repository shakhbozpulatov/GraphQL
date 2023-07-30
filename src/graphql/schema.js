import { makeExecutableSchema } from "@graphql-tools/schema";
import roomsModule from "../modules/rooms/index.js";

export const schema = makeExecutableSchema({
  typeDefs: [roomsModule.typeDefs],
  resolvers: [roomsModule.resolvers],
});
