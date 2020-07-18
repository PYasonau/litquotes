import React from 'react';
import { Panel, PanelHeader, Div, Group } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import logo from '../logo.svg';
import Footer from './Footer';

function MainPanel() {
        return (
            <Panel id={this.props.id}>
                <PanelHeader>
                    Курсы валют
                </PanelHeader>
                <Div style={{textAlign: 'center', marginTop: 10}}>
                    <img width={96} height={96} src={logo} alt="logo"/>
                </Div>
                <Group title="Курс ЦБ РФ">
                </Group>
                <Group title="Калькулятор">
                </Group>
                <Footer />
            </Panel>
        );
}

export default MainPanel;
