const Prompt = require('../models/promptModel');

//Http Status Code
const httpStatus = require('../utils/httpStatus');

const getAllPrompts = async () => {
  try {
    const prompts = await Prompt.find();
    return prompts
  } catch (err) {
    throw new Error('Failed to get prompts.');
  }
};

const searchPromptsByName = async ({ name }) => {
  try {
    const prompts = await Prompt.find({ name: { $regex: name, $options: 'i' } });
    return prompts;
  } catch (err) {
    throw new Error('Failed to get prompts.');
  }
}
const searchPromptsByTag = async ({ tag }) => {
  try {
    const prompts = await Prompt.find({ tags: { $in: [tag.toLowerCase()] } });
    return prompts;
  } catch (error) {
    throw new Error('Failed to get prompts.');
  }
}

module.exports = { getAllPrompts, searchPromptsByName, searchPromptsByTag }