const endpoint = 'http://localhost:8000/graphql/';
const QUERY = `
  {
    getUsers {
      id
      name
    }
  }
`;



export const Header = () => {
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: QUERY })
    })
        .then((response) => {
            console.log(response);
        });

    return (
        <div>
            <h1>Header</h1>
        </div>
    );
};


