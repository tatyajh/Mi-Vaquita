import pool from './db.js';

const Model = () => {

  const getAllGroupsModel = async () => {
    const { rows } = await pool.query('SELECT * FROM groups');
    return rows;
  };

  const getByIdGroupsModel = async (id) => {
    const { rows } = await pool.query('SELECT * FROM groups WHERE id = $1', [id]);
    return rows[0];
  };

  const createGroupsModel = async (data) => {
    const { ownerUserId, name, color, createdAt } = data;
    try {
        const { rows } = await pool.query(
            'INSERT INTO groups (ownerUserId, name, color, createdAt) VALUES ($1, $2, $3, $4) RETURNING *',
            [ownerUserId, name, color, createdAt]
        );
        return rows[0];
    } catch (error) {
        console.error('Error creating group:', error);
        throw error;
    }
};

  const updateGroupsModel = async (id, data) => {
    const { name, color } = data;  
    try {
        const { rows } = await pool.query(
            'UPDATE groups SET name = $1, color = $2 WHERE id = $3 RETURNING *',
            [name, color, id] 
        );
        if (rows.length === 0) {
            return null;
        }
        return rows[0];
    } catch (error) {
        console.error('Error updating group:', error);
        throw error;
    }
};


  const deleteGroupsModel = async (id) => {
    const { rows } = await pool.query('DELETE FROM groups WHERE id = $1 RETURNING id', [id]);
    if (rows.length === 0) {
      return null;
    }
    return { message: `Group with id ${id} was deleted successfully.` };
  };

  return {
    getAllGroupsModel,
    getByIdGroupsModel,
    createGroupsModel,
    updateGroupsModel,
    deleteGroupsModel,
  };
};

export default Model;
