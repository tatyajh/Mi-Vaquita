import Model from "../database/groups.model.js";

const GroupService = () => {
  const groupModel = Model();

  return {
    getAll: () => groupModel.getAllGroupsModel(),
    getById: (id) => groupModel.getByIdGroupsModel(id),
    create: (newGroup) => groupModel.createGroupsModel(newGroup),
    editById: (id, group) => groupModel.updateGroupsModel(id, group),
    removeById: (id) => groupModel.deleteGroupsModel(id),
  };
};

export default GroupService;
