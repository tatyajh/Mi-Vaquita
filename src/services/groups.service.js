import groups from '../database/groups.mock.js'

export const getAllGroupsService = async () => {
    return groups;
};

export const createGroupService = async (data) => {
    const newGroup = { id: groups.length + 1, ...data };
    groups.push(newGroup);
    return newGroup;
};

export const updateGroupService = async (id, data) => {
    const index = groups.findIndex(group => group.id == id);
    if (index !== -1) {
        groups[index] = { ...groups[index], ...data };
        return groups[index];
    }
    return null;
};

export const deleteGroupService = async (id) => {
    const index = groups.findIndex(group => group.id == id);
    if (index !== -1) {
        groups.splice(index, 1);
    }
};
