const User = require('../models/User');

const followTag = async (userId, tag) => {
  const user = await User.findById(userId);
  if (!user.followedTags.includes(tag)) {
    user.followedTags.push(tag);
    await user.save();
  }
  return user.followedTags;
};

const followPublisher = async (userId, publisherId) => {
  const user = await User.findById(userId);
  if (!user.followedPublishers.includes(publisherId)) {
    user.followedPublishers.push(publisherId);
    await user.save();
  }
  return user.followedPublishers;
};

const unfollowTag = async (userId, tag) => {
  const user = await User.findById(userId);
  user.followedTags = user.followedTags.filter(t => t !== tag);
  await user.save();
  return user.followedTags;
};

const unfollowPublisher = async (userId, publisherId) => {
  const user = await User.findById(userId);
  user.followedPublishers = user.followedPublishers.filter(id => id.toString() !== publisherId.toString());
  await user.save();
  return user.followedPublishers;
};

module.exports = {
  followTag,
  followPublisher,
  unfollowTag,
  unfollowPublisher
};
