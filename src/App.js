import ListRenderingStudy from './components/ListRenderingStudy';
import ConditionRenderingStudy from './components/ConditionalRenderingStudy';
import EventBinding from './components/EventBinding';
import UpdateInterface from './components/UpdateInterface';
import Divider from './components/Divider';
import CommentList from './components/CommentList';

function App() {
    return (
        <div className='App'>
            <ListRenderingStudy />
            <Divider />
            <ConditionRenderingStudy />
            <Divider />
            <EventBinding />
            <Divider />
            <UpdateInterface />
            <Divider />
            <CommentList />
        </div>
    );
}

export default App;
