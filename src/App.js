import React, { Component } from "react"
import PropTypes from "prop-types"
import { getCanvasPosition } from "./utils/formulas"
import Canvas from "./components/Canvas"

class App extends Component {
  componentDidMount() {
    const self = this
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition)
    }, 10)
    window.onresize = () => {
      const cnv = document.getElementById("aliens-go-home-canvas")
      cnv.style.width = `${window.innerWidth}px`
      cnv.style.height = `${window.innerHeight}px`
    }
    window.onresize()
  }

  handleTrackMouse = (event) => {
    this.canvasMousePosition = getCanvasPosition(event)
  }

  handleShoot = () => {
    this.props.shoot(this.canvasMousePosition)
  }

  handleStartGame = (event) => {
    event.stopPropagation()
    this.props.startGame()
  }

  handleSetLevel = (event) => {
    const target = event.currentTarget
    const attribute = target.getAttribute("data-level")
    this.props.setLevel(parseInt(attribute, 10))
  }

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        trackMouse={this.handleTrackMouse}
        startGame={this.handleStartGame}
        gameState={this.props.gameState}
        shoot={this.handleShoot}
        setLevel={this.handleSetLevel}
      />
    )
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(
      PropTypes.shape({
        position: PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired,
        }).isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  startGame: PropTypes.func.isRequired,
  shoot: PropTypes.func.isRequired,
  setLevel: PropTypes.func.isRequired,
}

export default App
