import { createBoard } from '@wixc3/react-board';
import MyOnsenUIComponent from '../../../components/my-onsen-ui-component/my-onsen-ui-component';

export default createBoard({
    name: 'MyOnsenUIComponent',
    Board: () => <MyOnsenUIComponent />,
});
