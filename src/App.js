import ListRenderingStudy from './components/ListRenderingStudy';
import ConditionRenderingStudy from './components/ConditionalRenderingStudy';
import EventBinding from './components/EventBinding';
import UpdateInterface from './components/UpdateInterface';

function App() {
    return (
        <div className='App'>
            <ListRenderingStudy />
            <ConditionRenderingStudy />
            <EventBinding />
            <UpdateInterface />
        </div>
    );
}

export default App;
