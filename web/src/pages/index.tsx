import { NavBar } from "../components/NavBar"
import { createUrqlClient } from "../utils/createUrqlClient"
import { withUrqlClient } from 'next-urql'

const Index = () => (
  <>
  <NavBar/>
  <div>Hello world</div>
  </>  
)

export default withUrqlClient(createUrqlClient)(Index)
