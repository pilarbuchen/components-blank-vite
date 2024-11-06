import { createBoard } from '@wixc3/react-board';
import MyComponent from '../../../components/my-component/my-component';

export default createBoard({
    name: 'MyComponent',
    Board: () => <MyComponent />,
});
