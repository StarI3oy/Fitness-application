import React from 'react';
import { Carousel, theme } from 'antd';
import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const contentStyle: React.CSSProperties = {
  height: '250px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#a832a0',
};

const Bcarousel: NextComponentType<NextPageContext, {}, Props> = (props: Props,) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 800,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle}>
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>муравьи в компоте ремастеред</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    </div>
  );
};

export default Bcarousel;