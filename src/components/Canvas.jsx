import React from "react"
import PropTypes from "prop-types"
import Sky from "./Sky"
import Ground from "./Ground"
import CannonBase from "./CannonBase"
import CannonPipe from "./CannonPipe"
import CannonBall from "./CannonBall"
import CurrentScore from "./CurrentScore"
import FlyingObject from "./FlyingObject"
import Heart from "./Heart"
import StartGame from "./StartGame"
import Title from "./Title"

const Canvas = (props) => {
  const gameHeight = 1200
  const viewBox = [
    window.innerWidth / -2,
    100 - gameHeight,
    window.innerWidth,
    gameHeight,
  ]

  const lives = []
  for (let i = 0; i < props.gameState.lives; i++) {
    const heartPosition = {
      x: -180 - i * 70,
      y: 35,
    }
    lives.push(<Heart key={i} position={heartPosition} />)
  }

  const startButtonText =
    props.gameState.kills > 0 ? "Game over! Play again?" : "Tap To Start!"

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
      onClick={props.shoot}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      {props.gameState.cannonBalls.map((cannonBall) => (
        <CannonBall key={cannonBall.id} position={cannonBall.position} />
      ))}
      <CannonPipe rotation={props.angle} />
      <CannonBase />
      <CurrentScore score={props.gameState.kills} />
      {!props.gameState.started && (
        <g>
          <StartGame
            onStartGame={props.startGame}
            onSetLevel={props.setLevel}
            currentLevel={props.gameState.level}
            startButtonText={startButtonText}
          />
        </g>
      )}
      {props.gameState.flyingObjects.map((flyingObject) => (
        <FlyingObject
          key={flyingObject.id}
          position={flyingObject.position}
          level={props.gameState.level}
        />
      ))}
      {lives}
      {!props.gameState.started && <Title />}
    </svg>
  )
}

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
  startGame: PropTypes.func.isRequired,
  shoot: PropTypes.func.isRequired,
  setLevel: PropTypes.func.isRequired,
}

export default Canvas
