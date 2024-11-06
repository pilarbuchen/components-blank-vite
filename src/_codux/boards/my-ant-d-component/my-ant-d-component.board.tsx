import { createBoard } from '@wixc3/react-board';
import MyAntDComponent from '../../../components/my-ant-d-component/my-ant-d-component';

export default createBoard({
    name: 'MyAntDComponent',
    Board: () => <MyAntDComponent />,
});
