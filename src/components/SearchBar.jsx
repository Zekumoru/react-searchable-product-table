import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { filterText, inStockOnly, onFilterTextChange, onInStockChange } =
      this.props;

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockChange(e.target.checked)}
          />
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
