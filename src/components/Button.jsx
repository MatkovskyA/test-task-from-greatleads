export const Button = ({ text, buttonStyle, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={buttonStyle}
      >{text}</button>
  )
}