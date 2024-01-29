import type { NextComponentType, NextPageContext } from "next";
import type { Dayjs } from 'dayjs';
import React from 'react';
import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';
//import type {onSelect} from 'antd';
import {useState} from 'react';
import moment from 'moment';



const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

//const onSelect = (value: Dayjs, info: { source: "year" | "month" | "date" | "customize"}) => {
//    console.log(value.format("DD-MM-YYYY"), info)
//}

const onChange = (value: Dayjs) => {
  console.log(value.format('YYYY-MM-DD'));
};

interface Props {}
//const [selectedDate, setSelectedDate] = useState(moment());
//const [displayText, setDisplayText] = useState('');

const CardCald: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
    const { token } = theme.useToken();

    const wrapperStyle: React.CSSProperties = {
      width: 300,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };
     
    return (
      <div style={wrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} onChange={onChange}
        onSelect={(date, { source }) => {
          if (source === 'date') {
            console.log('Panel Select:', source);
          }
        }}
          //onSelect={(date) => {
            //console.log (onSelect, date);
           //const dayjsDate = date; 
          //const formattedDate = date.format('YYYY-MM-DD');
          //setDisplayText(date);
        //}}
        />
      </div>
    );
}

export default CardCald