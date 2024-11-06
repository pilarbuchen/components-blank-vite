import { createBoard } from '@wixc3/react-board';
import MyFluentComponent from '../../../components/my-fluent-component/my-fluent-component';

export default createBoard({
    name: 'MyFluentComponent',
    Board: () => <MyFluentComponent />,
});
