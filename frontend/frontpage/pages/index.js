import Head from 'next/head';

export default function Home() {
    return (
        <div className='container mx-auto mt-4'>
            <Head>
                <title>KelasKoding</title>
                <link rel='icon' href='/favicon.ico'></link>
            </Head>

            <main>
                <h1>Ini halaman utama</h1>
            </main>
        </div>
    )
}
