const path = require('path');

const getDefaultConfig = () => ({
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'html'],
    assetExts: ['png', 'jpg', 'svg', 'html'],
  },
});

module.exports = (async () => {
  const {
    resolver: {
      sourceExts,
      assetExts,
    },
  } = await getDefaultConfig();
  return {
    watchFolders: [path.resolve(__dirname, '../')],
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
