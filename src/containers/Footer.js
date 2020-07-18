import React from 'react';
import { Div, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './Footer.css'
import Icon24Message from '@vkontakte/icons/dist/24/message';

function Footer() {
    return (
        <Div className="footer">
            <Button level="3" component="a" target="_blank"
                       href="https://vk.me/currency_app" before={<Icon24Message/>}/>
            <Button level="3" component="a" target="_blank"
                       href="https://vk.com/currency_app"></Button>
            <Button level="3" component="a"></Button>
        </Div>
  );
}
export default Footer;
