
export function SearchBar({className = null, ...props}) {
    return (
        <div className={'form-group' + (className ? ' ' + className + '-container': '')} {...props}>
            <input className={`form-input ${className}`} {...props} />
        </div>
    )
}