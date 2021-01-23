import React from 'react';
import AddAdministratorPage from './pages/AdministratorPage/AddAdministratorPage';
import AdministratorPage from './pages/AdministratorPage/AdministratorPage';
import AddCustomerPage from './pages/CustomerPage/AddCustomerPage';
import CustomerPage from './pages/CustomerPage/CustomerPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import HelpPage from './pages/HelpPage/HelpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AddPackagePage from './pages/PackagePage/AddPackagePage';
import PackagePage from './pages/PackagePage/PackagePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AddQuestionPage from './pages/QuestionPage/AddQuestionPage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import RegistryPage from './pages/RegistryPage/RegistryPage';
import SettingPage from './pages/SettingPage/SettingPage';
import AddTopicPage from './pages/TopicPage/AddTopicPage';
import TopicPage from './pages/TopicPage/TopicPage';
import AddVocabularyPage from './pages/VocabularyPage/AddVocabularyPage';
import VocabularyPage from './pages/VocabularyPage/VocabularyPage';

const routes = [
    {
        path:"/",
        exact: true,
        main: (match) => <DashboardPage/>
    },
    {
        path:"/packages/list",
        exact: true,
        main: (match) => <PackagePage/>
    },
    {
        path:"/packages/add",
        exact: true,
        main: (match) => <AddPackagePage/>
    },
    {
        path:"/packages/edit/:id",
        exact: true,
        main: (match) => <AddPackagePage/>
    },
    {
        path:"/questions/list",
        exact: true,
        main: (match) => <QuestionPage/>
    },
    {
        path:"/questions/add",
        exact: true,
        main: (match) => <AddQuestionPage/>
    },
    {
        path:"/questions/edit/:id",
        exact: true,
        main: (match) => <AddQuestionPage/>
    },
    {
        path:"/topics/list",
        exact: true,
        main: (match) => <TopicPage/>
    },
    {
        path:"/topics/add",
        exact: true,
        main: (match) => <AddTopicPage/>
    },
    {
        path:"/topics/edit/:id",
        exact: true,
        main: (match) => <AddTopicPage/>
    },
    {
        path:"/vocabularies/list",
        exact: true,
        main: (match) => <VocabularyPage/>
    },
    {
        path:"/vocabularies/add",
        exact: true,
        main: (match) => <AddVocabularyPage/>
    },
    {
        path:"/vocabularies/edit/:id",
        exact: true,
        main: (match) => <AddVocabularyPage/>
    },
    {
        path:"/customers/list",
        exact: true,
        main: (match) => <CustomerPage/>
    },
    {
        path:"/customers/add",
        exact: true,
        main: (match) => <AddCustomerPage/>
    },
    {
        path:"/administrators/list",
        exact: true,
        main: (match) => <AdministratorPage/>
    },
    {
        path:"/administrators/add",
        exact: true,
        main: (match) => <AddAdministratorPage/>
    },
    {
        path:"/user/profile",
        exact: true,
        main: (match) => <ProfilePage/>
    },
    {
        path:"/user/settings",
        exact: true,
        main: (match) => <SettingPage/>
    },
    {
        path:"/user/help",
        exact: true,
        main: (match) => <HelpPage/>
    },
    {
        path:"/login",
        exact: true,
        main: (match) => <LoginPage/>
    },
    {
        path:"/registry",
        exact: true,
        main: (match) => <RegistryPage/>
    },
]

export default routes;