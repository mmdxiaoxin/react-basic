import ListRenderingStudy from './components/ListRenderingStudy';
import ConditionRenderingStudy from './components/ConditionalRenderingStudy';
import EventBinding from './components/EventBinding';
import UpdateInterface from './components/UpdateInterface';
import Divider from './components/Divider';
import CommentList from './components/CommentList';
import DOMOption from './components/DOMOption';
import ContextStudy from './components/ContextStudy';
import Counter from './components/Counter';

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
            <Divider />
            <DOMOption />
            <Divider />
            <ContextStudy />
            <Divider />
            <Counter />
        </div>
    );
}

export default App;
