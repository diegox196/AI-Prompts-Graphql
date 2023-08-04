const { getPromptsByUserId, searchUserPromptsByName, searchUserPromptsByTag } = require('../controllers/promptController');

const promptResolver = {
  getPromptsByUserId,
  searchUserPromptsByName,
  searchUserPromptsByTag,  
};

module.exports = promptResolver;