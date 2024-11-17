import React from 'react'

function examples() {

    // Defining Variables
    let name: string;
    let age: string | number;
    let isStudent: boolean;
    let hobbies: string[];
    let name2: any;

    // Defining Types
    type Person = {
        name: string;
        age?: number;
    }

    // Using Interfaces
    interface Person2 {
        name: string;
        age?: number;
    }

    let Toni: Person2 = {
        name: "Tonisha"
    }

    // writing functions
    const LogName = (name: string) => {
        console.log(name);
    }

    // 


  return (
    <div>examples</div>
  );
}

export default examples