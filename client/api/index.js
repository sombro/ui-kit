import fetch from 'isomorphic-fetch';
// import config from '../../configs/сlient'; // dont know why, doesnt work
const config = {
    api: {
        vezetvsem: {
            url: '//booking.o3.vezetvsem.info/api',
            key: 'dy6bW8D1yEFjk1PsrAKNAfnLNfVWJNOiwusUk2a5',
        },
        dadata: {
            url: '//dadata.ru/api/v2',
            key: '7896a46be6e8181ef95ee35af2d2b801f4426c84',
        }
    },
    ga: {
        tracking: 'UA-18075654-1'
    },
    ym: {
        tracking: '1315865'
    },
    yandex_map: {
        key: 'AIlWxFYBAAAAPQpSCwIAIjA30pphrFOBbXE37WRlnWRitGkAAAAAAAAAAAAUYuHZ5CMVXFS7ACC0h7pwOxbllw=='
    },
    rollbar: {
        token: 'd49751286a264bc39541c9c313b41792',
    },
    lang: 'ru',
};

export function getHelpMail(mail) {
	return fetch(`${config.api.vezetvsem.url}/user/email_hint?email=${encodeURIComponent(mail)}`, {
		method: 'get',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-API-KEY': config.api.vezetvsem.key,
		},
	})
		.then(response => response.json())
		.catch(error => console.error(error));
}
