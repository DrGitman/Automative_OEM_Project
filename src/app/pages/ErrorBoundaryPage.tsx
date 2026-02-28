import { Link, useRouteError } from "react-router";

export default function ErrorBoundaryPage() {
    const error = useRouteError() as { status?: number; statusText?: string };
    const is404 = error?.status === 404;

    return (
        <div style={{ backgroundColor: '#d72322', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'Outfit, sans-serif' }}>
            <div style={{ background: 'white', borderRadius: '20px', padding: '48px', maxWidth: '480px', width: '100%', textAlign: 'center', boxShadow: '0 4px 52px rgba(0,0,0,0.15)' }}>
                <p style={{ fontSize: '72px', fontWeight: 900, color: '#d72322', margin: '0 0 8px 0' }}>{is404 ? '404' : 'Oops'}</p>
                <p style={{ fontSize: '22px', fontWeight: 700, color: '#111827', margin: '0 0 12px 0' }}>
                    {is404 ? 'Page not found' : 'Something went wrong'}
                </p>
                <p style={{ fontSize: '15px', color: '#718096', margin: '0 0 32px 0' }}>
                    {is404 ? "The page you're looking for doesn't exist." : "An unexpected error occurred. Please try again."}
                </p>
                <Link
                    to="/"
                    style={{ display: 'inline-block', background: '#d72322', color: 'white', borderRadius: '8px', padding: '14px 32px', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}
                >
                    Back to Login
                </Link>
            </div>
        </div>
    );
}
