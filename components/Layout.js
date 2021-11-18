import { useEffect } from "react";
import { useRouter } from 'next/router';
import NavBar from "./NavBar";
import NProgress from 'nprogress';


const Layout = ({ children, footer = true, dark = false }) => {

    const router = useRouter();

    useEffect(() => {
        const handleRouteCharge = url => {
            console.log(url)
            NProgress.start();
        }
        router.events.on('routeChangeStart', handleRouteCharge)

        router.events.on('routeChangeComplete', () => NProgress.done())

        return () => {
            router.events.off('routeChangeStart', handleRouteCharge)
        }
    }, [])

    return (
        <div className={dark ? 'bg-dark' : ''} >
            <NavBar />
            <main className="container py-4">
                {children}
            </main>
            {
                footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <h1>&copy; Guilermo Marcano</h1>
                            <p>2000 - {new Date().getFullYear()}</p>
                            <p>All rights reserverd</p>
                        </div>
                    </footer>
                )
            }
        </div>
    )
}
export default Layout;
