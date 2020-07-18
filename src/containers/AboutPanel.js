import React from 'react';
import { Panel, PanelHeader, Header, Group, Div, List, Cell, Link, platform, IOS } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

function AboutPanel() {
    return (
            <Panel id={this.props.id}>
                <PanelHeader
                    left={<Header>{osname === IOS ?
                        <Icon28ChevronBack/> : <Icon24Back/>}</Header>}>

                </PanelHeader>
                <Group title="Исходный код">
                    <Div>

                    </Div>
                </Group>
                <Group title="Используемые ресурсы">
                    <List>
                        <Cell multiline>

                        </Cell>
                        <Cell multiline>

                        </Cell>
                        <Cell multiline>

                        </Cell>
                    </List>
                </Group>
                <Footer />
          </Panel>
    );
}


export default AboutPanel;
