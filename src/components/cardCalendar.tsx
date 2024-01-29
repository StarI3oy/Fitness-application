import type { NextComponentType, NextPageContext } from "next";
import type { Dayjs } from 'dayjs';
import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';

interface Props {setSelectedDate: React.Dispatch<React.SetStateAction<string>>}


const CardCalendar: NextComponentType<NextPageContext, {}, Props> = (
  {setSelectedDate}
) => {

    const { token } = theme.useToken();

    const wrapperStyle: React.CSSProperties = {
      width: 300,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };
    const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
      console.log(value.format('YYYY-MM-DD'), mode);
    };
    
    const onSelect = (value: Dayjs, info: { source: "year" | "month" | "date" | "customize"}) => {
      setSelectedDate(value.format("DD-MM-YYYY"))
    };

    return (
      <div style={wrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} onSelect={onSelect} />
      </div>
    );
}

export default CardCalendar