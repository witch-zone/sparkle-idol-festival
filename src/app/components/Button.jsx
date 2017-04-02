import React from 'react'

const Button = ({ children, className }) => (
  <span className={`c-sif-button ${className}`}>
    <span className="c-sif-button__border">
      <span className="c-sif-button__border c-sif-button__border--off">
        <span className="c-sif-button__border">
          <span className="c-sif-button__link">
            {children}
          </span>
        </span>
      </span>
    </span>
  </span>
)

Button.defaultProps = {
  className: '',
}

const SecondaryButton = ({ children, className }) => (
  <Button
    className={`${className} c-sif-button--secondary`}
  >
    { children }
  </Button>
)

SecondaryButton.defaultProps = {
  className: '',
}

export {
  SecondaryButton,
}

export default Button
