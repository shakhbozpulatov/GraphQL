/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("rooms").del();
  await knex("rooms").insert([
    { room_name: "Facebook", floor: 2, for_stuff: false },
    { room_name: "Microsoft", floor: 3, for_stuff: false },
    { room_name: "Media va marketing", floor: 3, for_stuff: true },
  ]);
};
