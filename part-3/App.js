const App = () => (
    <div>
        <Person name="Clay" age={43} hobbies={["watching tv", "coding", "sleeping" ]}/>
        <Person name="Kathleen" age={16} hobbies={["watching movies", "guitar", "rapping" ]}/>
        <Person name="Matthew" age={25} hobbies={["grilling food", "craft beer", "video games" ]}/>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
