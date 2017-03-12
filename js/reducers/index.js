import { combineReducers } from 'redux';

const app = combineReducers({
  user: ()=>{
    return {user: 'zhangzhengqi'}
  },
})

export default app
