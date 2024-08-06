const App = () => (
    <div>
        <Tweet username="@newUser" name="New User" date="2024-08-05" message="This is my tweet debut!" />
        <Tweet username="@secondUser" name="User Two" date="2024-08-05" message="Fake news." />
        <Tweet username="@finalUser" name="Final User" date="2024-07-27" message="I am leaving the platform" />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));