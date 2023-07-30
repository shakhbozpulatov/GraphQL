import fs from "fs";
import { join } from "path";
import {
  addRoom,
  editRoom,
  listRooms,
  removeRoom,
  showRoom,
} from "./controllers.js";

const typeDefs = fs.readFileSync(
  join(process.cwd(), "src", "modules", "rooms", "_schema.gql"),
  "utf8"
);
const resolvers = {
  Query: {
    rooms: (_, args) => {
      return listRooms(args);
    },
    room: (_, args) => {
      return showRoom({ id: args.id });
    },
  },
  Mutation: {
    createRoom: (_, args) => {
      return addRoom(args.input);
    },
    updateRoom: (_, args) => {
      return editRoom({ id: args.id, ...args.input });
    },
    removeRoom: (_, args) => {
      return removeRoom({ id: args.id });
    },
  },
};

export default { typeDefs, resolvers };
