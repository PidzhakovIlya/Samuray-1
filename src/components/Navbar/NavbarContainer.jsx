
import s from './Navbar.module.css';
import Navbar from './Navbar';
import { connect } from 'react-redux';

const setActive = navData => navData.isActive ? s.active : s.item;


// const NavbarContainer = (props) => {

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState()
//         let friends = state.sidebar.friends.map((f) => <Friends name={f.name} img={f.img} />);
//         return <Navbar friends={friends} />
//       }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) =>{
  return {
    friends: state.sidebar.friends,
  }
}
let mapDispatchToProps = () =>{
  return{

  }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)


export default NavbarContainer;