import actionCreator from './actionCreator'

// ACTIONS
export const sampleAction = actionCreator('SAMPLE_ACTION', 'text')

// HOW TO STORE DATA
export const sampleReducer = (state = { }, action) => {
  switch (action.type) {
  case sampleAction.name:
    return {
      ...state,
      sampleText: action.text
    }
  default:
    return state
  }
}

export const getSampleText = state => state.sampleReducer.sampleText

export default sampleReducer
