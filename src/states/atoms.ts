import { atom } from 'recoil';
import { Todo, Color } from '../types';

export const colorState = atom<Color>({
    key: 'colorState', 
    default: 'white',
  });

export const todosState = atom<Todo[]>({
    key: 'todosState', 
    default: [],
  });