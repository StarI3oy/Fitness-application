import type { NextComponentType, NextPageContext } from "next";
import React, { createContext } from 'react';
import { Button, Modal, Space } from 'antd';

interface Props {}

const ReachableContext = createContext<string | null>(null);
const UnreachableContext = createContext<string | null>(null);

const config = {
  title: 'Use Hook!',
  content: (
    <>
      <ReachableContext.Consumer>{(name) => `Reachable: ${name}!`}</ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>{(name) => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
    </>
  ),
};

const Aalert: NextComponentType<NextPageContext, {}, Props> = (props: Props,) => {

    const [modal, contextHolder] = Modal.useModal();
  
    return (
      <ReachableContext.Provider value="Light">
        <Space>

          <Button
            onClick={async () => {
              modal.info(config);
            }}
          >
            У вас программа:1
            <br/>
            Понюхать бебру
          </Button>
        </Space>
        {/* `contextHolder` should always be placed under the context you want to access */}
        {contextHolder}
  
        {/* Can not access this context since `contextHolder` is not in it */}
        <UnreachableContext.Provider value="Bamboo" />
      </ReachableContext.Provider>
    );
  
};

export default Aalert