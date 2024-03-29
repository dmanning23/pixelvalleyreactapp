import 'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom:
import './App.css';
import Overworld from './Queries/GetOverworld';
import Location from './Queries/GetLocation';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
    uri: 'http://127.0.0.1:5000/graphql',
    cache: new InMemoryCache(),
    fetchOptions: {
        mode: 'no-cors'
    }
})

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={
                <ApolloProvider client={client}>
                    <Overworld scenarioId={'66044d8e18e6fc04d16623c2'}/>
                </ApolloProvider>}
            />
            <Route path="/location/:id" element={
                <ApolloProvider client={client}>
                    <Location />
                </ApolloProvider>}
            />
        </Routes>
    </BrowserRouter>
    );
}
 //swole ville 65bbcc69d9e6cf794859d192
//pirate village 6580b18f0b38cba6f29e3f88
//ninja village 659b4e1dd199ac6c4ab597c8
//spooksville 65b13e13041e78973118f97f
//Ancient Greek City 65d2692d22dcc866a3c70ab6
//Foxes 65e8f84addfad2c81f1a33a6
//Elves 65eccd03635456e5173ad235
//NeoTokyo 65ff27fb6e43ac4559f147fc
//Pemberley 66004b13006cd24fff3ea55a
//Fishing Village 6603768518e6fc04d166200e
//Androids 660392f318e6fc04d16621ed
//Atlantis 66044d8e18e6fc04d16623c2

export default App;
