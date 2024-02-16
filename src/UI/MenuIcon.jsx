export function MenuIcon({className = '', ...props}) {
    return (
        <svg className={`icon ${className}`} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="currentColor" stroke="currentColor" d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/>
        </svg>
    )
}