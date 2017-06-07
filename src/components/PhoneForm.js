import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

const PhoneForm = props => (
  <div className="col-sm-12 col-md-3 col-md-offset-1 col-lg-2 col-lg-offset-2">
    <div className="panel-top">
      <h4 className="fnt-blue">Your Phone</h4>
    </div>
    <div className="panel-bottom">
      <br />
      <div className="text-center">
        { props.product.length !== 0 ?
          <div>
            { props.product.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.image} alt="" />
                  <h4>
                    {item.model}
                    <small>{item.price}</small>
                  </h4>
                  <div>
                  <select style={{ width: '90%' }} onChange={props.chooseTenore}>
                  {
                    item.finance_option.length !== 0 ?
                    item.finance_option.map((cicilan, idx) => {
                      return (
                        <option key={idx} value={cicilan.id}>
                          <NumberFormat value={Math.ceil((item.price + item.price * cicilan.partnership.interest/100)/cicilan.tenore)} displayType={'text'} prefix={'Rp. '} thousandSeparator={true} /><span>/{cicilan.tenore}Bulan</span>
                        </option>
                      );
                    }) : <option></option>
                  }
                  </select>
                  </div>
                </div>
              );
            })}
            {
              props.validFinanceProductID ? <span /> : <span style={{ color: 'red' }}>Anda belum memilih cicilan</span>
            }
          </div>
          : <h4>Please pick product first</h4>}
        <Link className="button primary" to={props.phoneLink}>
          Choose a Different Phone
        </Link>
      </div>
      <br />
    </div>
    <br />
  </div>
);

export default PhoneForm;
