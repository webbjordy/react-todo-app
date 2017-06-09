var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('Should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.setSeatchText(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });

    it('should toggle showCompleted status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompleted(df(false), df(action));
      expect(res).toEqual(true)
    });
  });
});
