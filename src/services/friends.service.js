import FriendsModel from '../database/friends.model.js';

const FriendsService = () => {
  const friendsModel = FriendsModel();

  const getFriends = async () => {
    return friendsModel.getAllFriendsModel();
  };

  const addFriend = async (userId, friendUserId) => {
    const existingFriend = await friendsModel.getByUserIdAndFriendUserId(userId, friendUserId);
    if (existingFriend) {
      throw new Error('Friend already exists');
    }
    return friendsModel.createFriendsModel({ userId, friendUserId });
  };

  const deleteFriend = async (friendId) => {
    return friendsModel.deleteFriendsModel(friendId);
  };

  return {
    getFriends,
    addFriend,
    deleteFriend,
  };
};

export default FriendsService;
