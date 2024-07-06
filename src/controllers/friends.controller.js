import FriendsService from '../services/friends.service.js';
import { StatusCodes } from 'http-status-codes';

const friendsService = FriendsService();

export const getFriendsController = async (req, res) => {
  try {
    const friends = await friendsService.getFriends();
    res.status(StatusCodes.OK).json(friends);
  } catch (error) {
    console.error('Error getting friends:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Internal server error: ${error.message}` });
  }
};

export const addFriendController = async (req, res) => {
  const { userId, friendUserId } = req.body;
  try {
    const newFriend = await friendsService.addFriend(userId, friendUserId);
    res.status(StatusCodes.CREATED).json(newFriend);
  } catch (error) {
    console.error('Error adding friend:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Internal server error: ${error.message}` });
  }
};

export const deleteFriendController = async (req, res) => {
  const { userId, friendUserId } = req.body;
  try {
    const deleted = await friendsService.deleteFriend(userId, friendUserId);
    if (!deleted) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Friend not found' });
    }
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    console.error('Error deleting friend:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Internal server error: ${error.message}` });
  }
};
