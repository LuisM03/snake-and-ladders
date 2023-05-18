import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PositionPlayer {
  x: number;
  y: number;
}

const initialState: PositionPlayer = {
  x: 0,
  y: 0,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    returnGame: (state) => {
      state.x = 0;
      state.y = 0;
      
    },
    positionMove: (state, action: PayloadAction<number>) => {
      
      if((state.x - action.payload) < 1 && state.y === 9){
        state.x = 10 - (10 - state.x)
      }else {
        if( state.y === 1 || state.y === 3 || state.y === 5 || state.y === 7 || state.y === 9 ){
            if((state.x - action.payload) < 1){
                state.x =  action.payload - (10 - ((10 - state.x) + 1));
                state.y++;
            }else {
                state.x -= action.payload
            }
          }else {
            if(state.y === 0 || state.y === 2 || state.y === 4 || state.y === 6 || state.y === 8){
                if((state.x + action.payload) > 10){
                    state.y++;
                    state.x = 10 - ((state.x + action.payload) - 11);
                }else {
    
                    state.x += action.payload
                }
            }
          }
        }

        

        if(state.y === 4 && state.x === 1){
          state.y = 2;
          state.x = 2;
        } 
        if(state.y === 4 && state.x === 7){
          state.y = 0;
          state.x = 8;
        } 
        if(state.y === 5 && state.x === 9){
          state.y = 3;
          state.x = 10;
        } 
        if(state.y === 7 && state.x === 5){
          state.y = 4;
          state.x = 6;
        } 
        if(state.y === 9 && state.x === 3){
          state.y = 7;
          state.x = 1;
        }

        if(state.y === 0 && state.x === 4){
          state.x = 2;
          state.y = 5;
        }
        if(state.y === 0 && state.x === 10){
          state.x = 9;
          state.y = 2;
        }
        if(state.y === 2 && state.x === 5){
          state.x = 5;
          state.y = 4;
        }
        if(state.y === 6 && state.x === 9){
          state.x = 10;
          state.y = 8;
        }
        if(state.y === 7 && state.x === 6){
          state.x = 5;
          state.y = 9;
        }
    }   
  }
})

export const { positionMove, returnGame } = playerSlice.actions
export default playerSlice.reducer