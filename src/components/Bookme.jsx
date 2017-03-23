import React from 'react';
import moment from 'moment';
import { DateRange } from 'react-date-range';
import {Input, Row, Button, Icon} from 'react-materialize';

var style1 = {
	"text-align": "center"
}

var style2 = {
	color: "#FFF"
}

var style3 = {
	marginLeft: "20px"
}

export default class Bookme extends React.Component {
	 constructor(props, context) {
    super(props, context);

    this.state = {
      'rangePicker' : {},
      'linked' : {},
      'datePicker' : null,
      'firstDayOfWeek' : null,
      'predefined' : {},
    }
  }

    handleChange(which, payload) {
    this.setState({
      [which] : payload
    });
  }
 
    render(){
    	const { rangePicker } = this.state;
    const format = 'MMMM D, YYYY';
        return (
            <div>
            <div>
            <Button floating large className='green' waves='light' icon='check' />
            <h6>Available</h6>
            </div>    
                <DateRange
                startDate={ now => {return now.add(1,'month')}}
              endDate={ now => {return now.add(1,'month').add(3,'days')}}
              shownDate={moment()}
              offsetPositive={true}
              disableDaysBeforeToday={true}
              showMonthArrow={true}
              calendars={1}
              onInit={ this.handleChange.bind(this, 'rangePicker') }
            onChange={ this.handleChange.bind(this, 'rangePicker') }
                />
                <Row>
            <Input
            s={6}
            style={style1}
              type='text'
              readOnly
              value={ rangePicker['startDate'] && rangePicker['startDate'].format(format).toString() }
            ><Icon>account_circle</Icon></Input>
            <Input
            s={6}
            style={style1}
              type='text'
              readOnly
              value={ rangePicker['endDate'] && rangePicker['endDate'].format(format).toString() }
            ><Icon>account_circle</Icon></Input>
            </Row>
            <Button style={style3}><a style={style2} href="javascript:void( window.open( 'https://form.jotform.us/70796806968174', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) ">Request to Book</a></Button>
            </div>
        )
    }	
}
