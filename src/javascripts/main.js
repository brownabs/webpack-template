import '../styles/main.scss';
import { getUsers, getMessages } from './helpers/data';

const init = () => {
  console.log(getMessages());
  console.log(getUsers());
};

init();
