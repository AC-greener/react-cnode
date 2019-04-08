import State from '../../store/index'
import reducer from '../../components/homeheader/store/reducer'

describe('homeHeader/reducer', () => {
  it('should return show_display_option status', () => {

    const newState = reducer({
      showDisplayOptions: true,
      colClicked: false,
      rowClicked: true
    }, {type: 'show_display_option'})

    expect(newState.showDisplayOptions).toBe(false);
    // expect(newState.showDisplayOptions).toBe(State.getState().homeHeaderReducer.showDisplayOptions);

  });
});