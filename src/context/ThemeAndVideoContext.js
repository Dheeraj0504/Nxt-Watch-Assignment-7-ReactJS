import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  savedVideos: [],
  toggleTheme: () => {},
  changeTab: () => {},
  addAsLikedVideos: () => {},
  addAsDislikedVideos: () => {},
  addOrRemoveSavedVideo: () => {},
})
export default ThemeAndVideoContext
