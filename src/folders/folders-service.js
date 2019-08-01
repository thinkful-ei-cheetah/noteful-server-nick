const xss = require('xss')

const FoldersService = {
  getAllFolders(db) {
    return db
      .from('noteful_folders')
  },

  insertNewFoler(db, newFolder) {
    return db('noteful_folders')
      .insert(newFolder)
      .returning('*')
      .then(([folder]) => folder)
  },

  serializeFolders(folders) {
    return folders.map(this.serializeFolder)
  },

  serializeFolder(folder) {
    return {
      id: folder.id,
      name: xss(folder.name)
    }
  }
}

module.exports = FoldersService