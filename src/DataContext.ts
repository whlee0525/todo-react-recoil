import { createContext } from 'react';
import { State } from './types';

const DataContext = createContext<State>({
    color: 'white',
    setColor: () => { },
    todos: [],
    setTodos: () => { },
});

export default DataContext;