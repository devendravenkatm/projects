import React from 'react';

const Card = ({ user }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-xl transform transition-transform hover:scale-105">
            <div className="flex items-center justify-start mb-4">
                <img className="w-32 h-32 rounded-full mr-4" src={user.picture.large} alt="User" />
                <div>
                    <div className="font-bold text-xl mb-2">{`${user.name.first} ${user.name.last}`}</div>
                    <p className="text-gray-700 text-base">
                        <span className="font-semibold">Gender:</span> {user.gender}
                    </p>
                    <p className="text-gray-700 text-base">
                        <span className="font-semibold">Phone:</span> {user.phone}
                    </p>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="bg-black h-screen flex justify-center items-center">
            <div className="max-w-lg">
                <Card user={{ name: { first: "John", last: "Doe" }, gender: "Male", phone: "123-456-7890", picture: { large: "https://randomuser.me/api/portraits/men/1.jpg" } }} />
            </div>
        </div>
    );
};

export default App;
