import pool from "../lib/connection.js";

const GroupsModel = () => {

  const getAllGroupsModel = async () => {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM Groups");
    client.release();
    return result.rows;
  };

  const getByIdGroupsModel = async (id) => {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM Groups WHERE ID = $1", [id]);
    client.release();
    return result.rows[0];
  };

  const createGroupsModel = async (data) => {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO Groups (owneruserid, name, color, CREATEDAT) VALUES ($1, $2, $3, NOW()) RETURNING *",
      [data.ownerUserId, data.name, data.color]
    );
    client.release();
    return result.rows[0];
  };

  const updateGroupsModel = async (id, data) => {
    const client = await pool.connect();
    const result = await client.query(
      "UPDATE Groups set name = $1, color = $2 WHERE id = $3 RETURNING *",
      [data.name, data.color, id]
    );
    client.release();
    return result.rows[0];
  };

  const deleteGroupsModel = async (id) => {
    const client = await pool.connect();
    const result = await client.query("DELETE FROM Groups WHERE id = $1", [id]);
    client.release();
    return result.rowCount >= 1;
  };

  const addParticipants = async (groupId, participantIds) => {
    const client = await pool.connect();
    try {
      const insertValues = participantIds.map(userId => `(${groupId}, ${userId})`).join(',');
      const query = `INSERT INTO GroupParticipants (group_id, user_id) VALUES ${insertValues}`;
      await client.query(query);
    } finally {
      client.release();
    }
  };

  const getParticipants = async (groupId) => {
    const client = await pool.connect();
    try {
      const query = `SELECT u.id, u.email FROM GroupParticipants gp JOIN Users u ON gp.user_id = u.id WHERE gp.group_id = $1`;
      const result = await client.query(query, [groupId]);
      return result.rows;
    } finally {
      client.release();
    }
  };

  return {
    getAllGroupsModel,
    getByIdGroupsModel,
    createGroupsModel,
    updateGroupsModel,
    deleteGroupsModel,
    addParticipants,
    getParticipants,
  };
};

export default GroupsModel;
