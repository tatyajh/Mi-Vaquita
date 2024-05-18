import pool from "../lib/connection.js";

const GroupsModel = () => {
  
  const getAllGroupsModel = async () => {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM GROUPS");
    client.release();
    return result.rows;
  };

  const getByIdGroupsModel = async (id) => {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM GROUPS WHERE ID = $1", [
      id,
    ]);
    client.release();
    return result.rows[0];
  };

  const createGroupsModel = async (data) => {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO GROUPS (owneruserid, name, color, CREATEDAT) VALUES ($1, $2, $3, NOW()) RETURNING *",
      [data.ownerUserId, data.name, data.color]
    );
    client.release();
    return result.rows[0];
  };

  const updateGroupsModel = async (id, data) => {
    const client = await pool.connect();
    const result = await client.query(
      "UPDATE GROUPS set name = $1, color = $2 WHERE id = $3 RETURNING *",
      [data.name, data.color, id]
    );
    client.release();
    return result.rows[0];
  };

  const deleteGroupsModel = async (id) => {
    const client = await pool.connect();
    const result = await client.query("DELETE FROM GROUPS WHERE id = $1", [id]);
    client.release();
    return result.rowCount >= 1;
  };

  return {
    getAllGroupsModel,
    getByIdGroupsModel,
    createGroupsModel,
    updateGroupsModel,
    deleteGroupsModel,
  };
};

export default GroupsModel;
