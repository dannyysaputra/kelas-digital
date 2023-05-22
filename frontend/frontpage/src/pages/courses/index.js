import React from 'react'
import Link from 'next/link';

export default function Random({data}) {
    return (
        <>
            <main className='container-fluid mt-12 mx-auto'>
                <h1 className='text-2xl'>Random words</h1>

                <ul>
                    {
                        data.map(todo => {
                            return (
                                <li key={todo.id} className='border border-indigo-700 p-4'>
                                    <Link href='/random/{id}' as={`/random/${todo.id}`}>
                                        <a href="">{todo?.title ?? "-"} </a>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </main>
        </>
    )
}

Random.getInitialProps = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => json)

        return { data }
    } catch (error) {
        
    }
}
