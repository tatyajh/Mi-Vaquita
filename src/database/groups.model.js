const Model = () => {
  const groups = [];

  const getAllGroupsModel = () => {
    return groups;
  };

  const getByIdGroupsModel = (id) => {
    return groups.find((entity) => entity.id === id);
  };

  const createGroupsModel = (data) => {
    const existingGroup = groups.find(
      (group) => group.name.toLowerCase() === data.name.toLowerCase()
    );
    if (existingGroup) {
      throw new Error('Group name already exists');
    }
    const newGroup = { id: (groups.length + 1).toString(), ...data };
    groups.push(newGroup);
    return newGroup;
  };

  const updateGroupsModel = (id, data) => {
    const index = groups.findIndex((group) => group.id === id);
    if (index !== -1) {
      groups[index] = { ...groups[index], ...data };
      return groups[index];
    }
    return null;
  };

  const deleteGroupsModel = (id) => {
    const index = groups.findIndex((group) => group.id === id);
    if (index !== -1) {
      groups.splice(index, 1);
      return { message: `Group with id ${id} was deleted successfully.` };
    } else {
      return null;
    }
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
