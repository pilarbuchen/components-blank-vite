import { createBoard } from '@wixc3/react-board';
import MyVisxComponent from '../../../components/my-visx-component/my-visx-component';

export default createBoard({
    name: 'MyVisxComponent',
    Board: () => <MyVisxComponent />,
});
