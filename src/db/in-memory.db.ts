// db/in-memory.db.ts
import { BlogEntity } from './models/BlogEntity';
import { PostEntity } from './models/PostEntity';

export const db = {
    blogs: <BlogEntity[]>[
        {
            id: '1',
            name: 'Tech Blog',
            description: 'Все о технологиях и программировании',
            websiteUrl: 'https://techblog.com'
        },
        {
            id: '2',
            name: 'Travel Stories',
            description: 'Путешествия по всему миру',
            websiteUrl: 'https://travelstories.com'
        },
        {
            id: '3',
            name: 'Food & Recipes',
            description: 'Вкусные рецепты для всей семьи',
            websiteUrl: 'https://foodrecipes.com'
        }
    ],

    posts: <PostEntity[]>[
        {
            id: '101',
            title: 'Как начать программировать на TypeScript',
            shortDescription: 'Руководство для начинающих разработчиков',
            content: 'Полное руководство по TypeScript. Рассматриваем основные типы, интерфейсы, классы и многое другое. Подходит для новичков и опытных разработчиков.',
            blogId: '1',
            blogName: 'Tech Blog'
        },
        {
            id: '102',
            title: '10 лучших мест в Европе',
            shortDescription: 'Куда поехать в этом сезоне',
            content: 'Париж, Барселона, Рим, Амстердам, Прага, Вена, Будапешт, Краков, Дубровник, Санторини. Советы по бюджету и лучшему времени для посещения.',
            blogId: '2',
            blogName: 'Travel Stories'
        },
        {
            id: '103',
            title: 'Express.js middleware',
            shortDescription: 'Понимаем middleware в Express',
            content: 'Что такое middleware, как их создавать и использовать. Встроенные middleware, обработка ошибок, примеры использования в реальных проектах.',
            blogId: '1',
            blogName: 'Tech Blog'
        },
        {
            id: '104',
            title: 'Паста карбонара',
            shortDescription: 'Быстрый и вкусный рецепт',
            content: 'Ингредиенты: спагетти 200г, бекон 100г, яйца 2шт, сыр пармезан 50г, соль, перец. Приготовление: обжарить бекон, смешать яйца с сыром, соединить с пастой...',
            blogId: '3',
            blogName: 'Food & Recipes'
        }
    ]
};