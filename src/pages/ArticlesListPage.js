import React from 'react';
import articleContent from './article-content';
import ArtcilesList from '../components/ArticlesList';

const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArtcilesList articles={articleContent} />
    </>
);

export default ArticlesListPage;