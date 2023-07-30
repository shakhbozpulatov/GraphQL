import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const showRoom = async ({ id }) => {
  const room = await db("rooms").where({ id }).first();

  if (!room) {
    throw new NotFoundError("room not found");
  }

  return room;
};

export const listRooms = async (payload) => {
  try {
    const {
      q,
      offset = 0,
      limit = 5,
      sort = { by: "id", order: "ASC" },
    } = payload;

    const dbQuery = db("rooms").select("id", "room_name", "floor", "for_stuff");

    if (q) {
      dbQuery.where("room_name", "ilike", `%${q}%`);
    }

    const total = await dbQuery.clone().count().groupBy("id");
    dbQuery.orderBy(
      sort.by == "FLOOR" ? "floor" : "id",
      sort.order == "ASC" ? "asc" : "desc"
    );
    dbQuery.limit(limit).offset(offset);

    const rooms = await dbQuery;

    return { list: rooms, total: total.length, limit, offset };
  } catch (error) {
    return error;
  }
};

export const addRoom = async (payload) => {
  const result = await db("rooms").insert(payload).returning("*");
  return result[0];
};

export const editRoom = async ({ id, ...changes }) => {
  const room = await db("rooms").where({ id }).first();

  if (!room) {
    throw new NotFoundError("room not found");
  }

  return (await db("rooms").where({ id }).update(changes).returning("*"))[0];
};

export const removeRoom = async ({ id }) => {
  const room = await db("rooms").where({ id }).first();

  if (!room) {
    throw new NotFoundError("room not found");
  }

  return (await db("rooms").where({ id }).delete().returning("*"))[0];
};
