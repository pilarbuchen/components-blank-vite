import { createBoard } from '@wixc3/react-board';
import MyMantineComponent from '../../../components/my-mantine-component/my-mantine-component';

export default createBoard({
    name: 'MyMantineComponent',
    Board: () => <MyMantineComponent />,
});
