import { selector } from "recoil";
import { todoState } from "../atoms/TodoState";

export const totalTodos = selector({
    key: 'totalTodos', 
    get: ({get}) => {
    const te = get(todoState);
  
    return te.length; 
    },
  });
  
  