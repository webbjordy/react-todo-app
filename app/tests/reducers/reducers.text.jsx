var expect = require('expect');
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('Should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.setSeatchText('', action);
      expect(res).toEqual(action.searchText);
    });
  });
});
