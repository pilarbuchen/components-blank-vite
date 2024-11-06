import { createBoard } from '@wixc3/react-board';
import MyPrimeReactComponent from '../../../components/my-prime-react-component/my-prime-react-component';

export default createBoard({
    name: 'MyPrimeReactComponent',
    Board: () => <MyPrimeReactComponent />,
});
