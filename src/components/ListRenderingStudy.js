const list = [
    { id: 1001, name: 'Vue' },
    { id: 1002, name: 'React' },
    { id: 1003, name: 'Angular' },
];

function ListRenderingStudy() {
    return (
        <div className='ListRenderingStudy'>
            <h1>列表渲染</h1>
            <ul>
                {list.map((item) => {
                    return <li key={item.id}>{item.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default ListRenderingStudy;
