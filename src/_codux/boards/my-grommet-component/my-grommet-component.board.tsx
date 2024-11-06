import { createBoard } from '@wixc3/react-board';
import MyGrommetComponent from '../../../components/my-grommet-component/my-grommet-component';

export default createBoard({
    name: 'MyGrommetComponent',
    Board: () => <MyGrommetComponent />,
});
