import React from 'react'

const Button = ({ children, attribute, className }) => (
  <span
    className={`c-sif-button c-sif-button--${attribute} ${className}`}
  >
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
  attribute: '',
  className: '',
}

export default Button
