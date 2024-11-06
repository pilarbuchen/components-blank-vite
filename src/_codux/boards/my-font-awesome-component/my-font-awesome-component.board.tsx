import { createBoard } from '@wixc3/react-board';
import MyFontAwesomeComponent from '../../../components/my-font-awesome-component/my-font-awesome-component';

export default createBoard({
    name: 'MyFontAwesomeComponent',
    Board: () => <MyFontAwesomeComponent />,
});
