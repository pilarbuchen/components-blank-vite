import { createBoard } from '@wixc3/react-board';
import MyChakraComponent from '../../../components/my-chakra-component/my-chakra-component';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

export default createBoard({
    name: 'MyChakraComponent',
    Board: () => (
        <ChakraProvider value={defaultSystem}>
            <MyChakraComponent />,
        </ChakraProvider>
    ),
});
