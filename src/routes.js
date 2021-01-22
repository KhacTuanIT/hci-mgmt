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
        main: () => <DashboardPage/>
    },
    {
        path:"/packages/list",
        exact: true,
        main: () => <PackagePage/>
    },
    {
        path:"/packages/add",
        exact: true,
        main: () => <AddPackagePage/>
    },
    {
        path:"/packages/edit/:id",
        exact: true,
        main: () => <AddPackagePage/>
    },
    {
        path:"/questions/list",
        exact: true,
        main: () => <QuestionPage/>
    },
    {
        path:"/questions/add",
        exact: true,
        main: () => <AddQuestionPage/>
    },
    {
        path:"/questions/edit/:id",
        exact: true,
        main: () => <AddQuestionPage/>
    },
    {
        path:"/topics/list",
        exact: true,
        main: () => <TopicPage/>
    },
    {
        path:"/topics/add",
        exact: true,
        main: () => <AddTopicPage/>
    },
    {
        path:"/topics/edit/:id",
        exact: true,
        main: () => <AddTopicPage/>
    },
    {
        path:"/vocabularies/list",
        exact: true,
        main: () => <VocabularyPage/>
    },
    {
        path:"/vocabularies/add",
        exact: true,
        main: () => <AddVocabularyPage/>
    },
    {
        path:"/vocabularies/edit/:id",
        exact: true,
        main: () => <AddVocabularyPage/>
    },
    {
        path:"/customers/list",
        exact: true,
        main: () => <CustomerPage/>
    },
    {
        path:"/customers/add",
        exact: true,
        main: () => <AddCustomerPage/>
    },
    {
        path:"/administrators/list",
        exact: true,
        main: () => <AdministratorPage/>
    },
    {
        path:"/administrators/add",
        exact: true,
        main: () => <AddAdministratorPage/>
    },
    {
        path:"/user/profile",
        exact: true,
        main: () => <ProfilePage/>
    },
    {
        path:"/user/settings",
        exact: true,
        main: () => <SettingPage/>
    },
    {
        path:"/user/help",
        exact: true,
        main: () => <HelpPage/>
    },
    {
        path:"/login",
        exact: true,
        main: () => <LoginPage/>
    },
    {
        path:"/registry",
        exact: true,
        main: () => <RegistryPage/>
    },
]

export default routes;