const { getAllPrompts, searchPromptsByName, searchPromptsByTag } = require('../controllers/promptController');

const promptResolver = {
  getAllPrompts: getAllPrompts,
  searchPromptsByName: searchPromptsByName,
  searchPromptsByTag: searchPromptsByTag,  
};

module.exports = promptResolver;