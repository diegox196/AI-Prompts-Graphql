const Prompt = require('../models/promptModel');

const getPromptsByUserId = async ({ user_id }) => {
  try {
    const prompts = await Prompt.find({ user_id: user_id });
    return prompts;
  } catch (err) {
    throw new Error('Failed to get prompts.');
  }
};

const searchUserPromptsByName = async ({ user_id, name }) => {
  try {
    const prompts = await Prompt.find({ user_id, name: { $regex: name, $options: 'i' } });
    return prompts;
  } catch (err) {
    throw new Error('Failed to get prompts.');
  }
}
const searchUserPromptsByTag = async ({ user_id, tag }) => {
  try {
    const prompts = await Prompt.find({ user_id, tags: { $in: [tag.toLowerCase()] } });
    return prompts;
  } catch (error) {
    throw new Error('Failed to get prompts.');
  }
}

module.exports = { getPromptsByUserId, searchUserPromptsByName, searchUserPromptsByTag }