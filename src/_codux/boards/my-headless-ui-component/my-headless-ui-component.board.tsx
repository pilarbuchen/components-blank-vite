import { createBoard } from '@wixc3/react-board';
import MyHeadlessUIComponent from '../../../components/my-headless-ui-component/my-headless-ui-component';

export default createBoard({
    name: 'MyHeadlessUIComponent',
    Board: () => <MyHeadlessUIComponent />,
});
