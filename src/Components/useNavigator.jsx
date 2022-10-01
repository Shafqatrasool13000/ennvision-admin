import { useNavigate } from 'react-router-dom'

const useNavigator = ({path}) => {

    const navigate=useNavigate();

  return (
    navigate(path)
  )
}
export default useNavigator