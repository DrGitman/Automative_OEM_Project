import { Link, useRouteError } from "react-router";

export default function ErrorBoundaryPage() {
    const error = useRouteError() as { status?: number; statusText?: string };
    const is404 = error?.status === 404;

    return (
        <div style={{ backgroundColor: '#D72322', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ background: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '32px', padding: '56px', maxWidth: '520px', width: '100%', textAlign: 'center', boxShadow: '0 4px 52px rgba(0,0,0,0.15)' }}>
                <p style={{ fontSize: '120px', fontWeight: 900, color: '#D72322', margin: '0 0 16px 0', letterSpacing: '-0.05em' }}>{is404 ? '404' : '!'}</p>
                <p style={{ fontSize: '32px', fontWeight: 900, color: '#04091E', margin: '0 0 12px 0', lineHeight: 1.2 }}>
                    {is404 ? 'Page not found' : 'Something went wrong'}
                </p>
                <p style={{ fontSize: '16px', fontWeight: 500, color: '#747681', margin: '0 0 32px 0', lineHeight: 1.6 }}>
                    {is404 ? "The page you're looking for doesn't exist or has been moved." : "An unexpected error occurred. Our team has been notified."}
                </p>
                <Link
                    to="/"
                    style={{ 
                        display: 'inline-block', 
                        background: '#D72322', 
                        color: 'white', 
                        borderRadius: '16px', 
                        padding: '18px 48px', 
                        fontWeight: 900, 
                        fontSize: '14px', 
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        tracking: '0.1em',
                        boxShadow: '0 10px 30px rgba(215, 35, 34, 0.2)',
                        transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                >
                    Back to Garage
                </Link>
            </div>
        </div>
    );
}
