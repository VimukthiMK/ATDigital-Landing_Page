import 'src/components/Button/button.css'

 const Button = ({ children }) => {
    return <button className='btn'>
        {children}
    </button>
  }
  export default Button