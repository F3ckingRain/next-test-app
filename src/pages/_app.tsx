import styles from './App.module.css'
import Router from "@/router/Router";
import '@/styles/style.css'
import TableContainer from "@/containers/TableContainer/TableContainer";
import {Provider} from "react-redux";
import store from "@/store/store";
import ModalContainer from "@/components/Modals/ModalContainer";
export default function App() {
  return (
    <div className={styles.app}>
      <Provider store={store}>
        <Router/>
        <TableContainer/>
        <ModalContainer/>
      </Provider>
    </div>
  )
}
