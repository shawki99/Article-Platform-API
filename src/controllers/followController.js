const followService = require('../services/followService');

const followTag = async (req, res) => {
  try {
    const userId = req.user.id;
    const tag = req.body.tag;
    const followedTags = await followService.followTag(userId, tag);
    res.json({ followedTags });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const followPublisher = async (req, res) => {
  try {
    const userId = req.user.id;
    const publisherId = req.body.publisherId;
    const followedPublishers = await followService.followPublisher(userId, publisherId);
    res.json({ followedPublishers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const unfollowTag = async (req, res) => {
  try {
    const userId = req.user.id;
    const tag = req.body.tag;
    const followedTags = await followService.unfollowTag(userId, tag);
    res.json({ followedTags });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const unfollowPublisher = async (req, res) => {
  try {
    const userId = req.user.id;
    const publisherId = req.body.publisherId;
    const followedPublishers = await followService.unfollowPublisher(userId, publisherId);
    res.json({ followedPublishers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  followTag,
  followPublisher,
  unfollowTag,
  unfollowPublisher
};
