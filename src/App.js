import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import VideoDetailView from './components/VideoDetailView'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  addOrRemoveSavedVideo = videoDetails => {
    const {savedVideos} = this.state
    let savedListIds = []
    if (savedVideos.length !== 0) {
      savedListIds = savedVideos.map(eachVideo => eachVideo.id)
    }
    if (savedListIds.includes(videoDetails.id)) {
      this.setState({
        savedVideos: savedVideos.filter(
          eachVideo => eachVideo.id !== videoDetails.id,
        ),
      })
    } else {
      this.setState({savedVideos: [...savedVideos, videoDetails]})
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          activeTab,
          changeTab: this.changeTab,
          savedVideos,
          addOrRemoveSavedVideo: this.addOrRemoveSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailView}
          />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}
export default App
