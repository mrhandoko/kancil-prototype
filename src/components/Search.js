import React from 'react';

const Search = props => (
  <div className="clean-form" style={{ padding: '1rem' }}>
    <h5>SEARCH</h5>
    <input type="text" onChange={event => this.searchPhone(event)} />
    <div className="form-spacer" />
    <h5>BRAND</h5>
    <div className="input-group">
      <input type="radio" id="chk0" name="filter" value="" onChange={() => this.checkedPhone('')} onChecked={this.state.checked === ''} tabIndex={0} /> <label htmlFor="chk0">&nbsp;All</label>
      <br />
      <input type="radio" id="chk1" name="filter" value="Andromax" onChange={() => this.checkedPhone('Andromax')} onChecked={this.state.checked === 'Andromax'} tabIndex={0} /> <label htmlFor="chk1">&nbsp;Andromax</label>
      <br />
      <input type="radio" id="chk2" name="filter" value="Blackberry" onChange={() => this.checkedPhone('Blackberry')} onChecked={this.state.checked === 'Blackberry'} tabIndex={1} /> <label htmlFor="chk2">&nbsp;Blackberry</label>
      <br />
      <input type="radio" id="chk3" name="filter" value="Lenovo" onChange={() => this.checkedPhone('Lenovo')} onChecked={this.state.checked === 'Lenovo'} tabIndex={2} /> <label htmlFor="chk3">&nbsp;Lenovo</label>
    </div>
    <div className="form-spacer" />
    <h5>Price Range</h5>
    <select>
      <option>0 - 1jt</option>
      <option>1jt - 2jt</option>
      <option>2jt - 3jt</option>
      <option>3jt - 4jt</option>
    </select>
    <div className="form-spacer" />
    <h5>Screen Size</h5>
    <select>
      <option>15cm</option>
      <option>20cm</option>
    </select>
    <br />
  </div>
</div>
</div>
</div>
)
