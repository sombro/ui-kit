// import config from '../configs/сlient'; // dont know why, doesnt work
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

const translations = Object.assign(
    {},
    require(`./${config.lang}/placeholders`),
    require(`./${config.lang}/tips`),
    require(`./${config.lang}/validation`),
    require(`./${config.lang}/warnings`),
    require(`./${config.lang}/text`)
);

export function translate(key, context) {
    const translation = translations[key];

    if (context && translation && translation[context]) {
        return translation[context];
    }

    return (translation && translation.default || translation) || key;
}
