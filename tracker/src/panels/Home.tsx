import React, { MouseEventHandler } from 'react';
import { Panel } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';

interface Props {
	id: string;
	go: MouseEventHandler<HTMLElement>;
	fetchedUser?: UserInfo;
}

const Home: React.FC<Props> = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		
	</Panel>
);

export default Home;
