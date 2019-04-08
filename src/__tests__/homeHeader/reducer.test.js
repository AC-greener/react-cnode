import State from '../../store/index'
import reducer from '../../components/homeheader/store/reducer'

describe('homeHeader/reducer', () => {
  it('show_display_option 值应该是false', () => {

    const newState = reducer({
      showDisplayOptions: true,
      colClicked: false,
      rowClicked: true
    }, {type: 'show_display_option'})

    expect(newState.showDisplayOptions).toBe(false);
    // expect(newState.showDisplayOptions).toBe(State.getState().homeHeaderReducer.showDisplayOptions);

  });
});