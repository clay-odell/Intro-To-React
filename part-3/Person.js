const MAX_NAME_LEN = 6;
function Person({age, name, hobbies}) {
    const voteAge = age >= 18 ? "Please go vote!" : "You must be 18!";
    const displayName = name.length > 8 ? name.slice(0, MAX_NAME_LEN) : name;
    const hobbiesLI = hobbies.map(h => <li>{h}</li>);
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {displayName}</li>
                <li>Age: {age}</li>
            <ul>
                Hobbies: {hobbiesLI}
            </ul>
            </ul>
            <h3>{voteAge}</h3>
        </div>
    );
}