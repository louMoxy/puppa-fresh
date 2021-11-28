export const Facebook = () => {
    return (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Facebook</title>
            <path fill='currentcolor' d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
    )
}

export const Twitter = () => {
    return (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Twitter</title>
            <path fill='currentcolor' d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
    )
}

export const Instagram = () => {
    return (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Instagram</title>
            <path fill='currentcolor' d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
    )
}


export const PawPrint = ({fill = '#C7DDD9', handleClick}) => {
    return (
        <div style={{ width: 34, padding: 5, margin: 2 }} onClick={handleClick}>
        <svg viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.75991 4.01459C2.27478 4.01459 2.7522 4.21455 3.10793 4.54526C3.44493 4.85289 3.6696 5.27588 3.69769 5.74502V5.85269C3.69769 6.29106 3.52919 6.68329 3.23899 6.98324C2.93943 7.29087 2.51817 7.49083 2.02203 7.5139H1.93778C1.42291 7.5139 0.945485 7.31394 0.589758 6.98324C0.252753 6.6756 0.0374449 6.25261 0 5.78347V5.6758C0 5.23743 0.168502 4.83751 0.4587 4.54526C0.75826 4.23762 1.18888 4.03766 1.67566 4.01459H1.75991ZM8.49064 12.336C7.85407 12.3206 7.30176 12.5129 6.76817 12.7052L6.73073 12.7129C6.17841 12.9128 5.64482 13.0974 4.9989 13.0974C4.78359 13.0974 4.57764 13.0743 4.3717 13.0359C3.76322 12.9051 3.24835 12.5898 2.8739 12.1899C2.50881 11.7977 2.2935 11.3208 2.2935 10.8594C2.2935 10.721 2.31222 10.5825 2.35903 10.4441C2.55562 9.79806 3.19218 9.352 3.83811 8.88286C4.47467 8.42141 5.13932 7.94458 5.24229 7.32163C5.35463 6.6833 5.69163 6.05265 6.30947 5.60658C6.8337 5.22974 7.55452 4.99132 8.5 4.99132C9.44549 4.99132 10.1663 5.22974 10.6905 5.60658C11.3084 6.05265 11.6454 6.6833 11.7483 7.32163C11.8607 7.94458 12.5253 8.42141 13.1619 8.88286C13.8078 9.352 14.435 9.79806 14.641 10.4441C14.6878 10.5825 14.7065 10.721 14.7065 10.8594C14.7065 11.3208 14.4912 11.7977 14.1167 12.1899C13.7517 12.5898 13.2274 12.9051 12.6189 13.0359C12.4224 13.0743 12.2164 13.0974 12.0011 13.0974C11.3271 13.0974 10.7654 12.9128 10.185 12.7129C9.65143 12.536 9.10848 12.3514 8.49064 12.336ZM9.91355 0.592191C10.3254 0.230724 10.8684 0 11.4675 0H11.5705C12.1228 0.0307632 12.6189 0.253796 12.9653 0.599881C13.293 0.930585 13.4989 1.38434 13.4989 1.88424C13.4989 1.90732 13.4989 1.95346 13.4895 1.9996C13.4615 2.53796 13.1993 3.02248 12.8062 3.37626C12.4036 3.74541 11.8513 3.96845 11.2522 3.96845H11.1586C10.5969 3.94537 10.1101 3.72234 9.76377 3.36857C9.42676 3.03786 9.23018 2.5841 9.23018 2.0842C9.23018 2.06113 9.23018 2.01499 9.23018 1.96884C9.26762 1.43049 9.52974 0.945967 9.91355 0.592191ZM5.53249 0C6.12225 0 6.67456 0.230724 7.08645 0.592191C7.47026 0.945967 7.73238 1.43049 7.76982 1.96884C7.76982 2.01499 7.76982 2.06113 7.76982 2.0842C7.76982 2.5841 7.57324 3.03786 7.23623 3.36857C6.88987 3.72234 6.40308 3.94537 5.84141 3.96845H5.73844C5.14868 3.96845 4.59637 3.74541 4.19383 3.37626C3.80066 3.02248 3.53855 2.53796 3.51046 1.9996C3.5011 1.95346 3.5011 1.90732 3.5011 1.88424C3.5011 1.38434 3.69769 0.930585 4.03469 0.599881C4.38106 0.253796 4.86784 0.0307632 5.42952 0H5.53249V0ZM13.8921 4.54526C14.2384 4.21455 14.7159 4.01459 15.2401 4.01459H15.3243C15.8111 4.03766 16.2417 4.23762 16.5413 4.54526C16.8221 4.83751 17 5.23743 17 5.6758L16.9906 5.78347C16.9626 6.25261 16.7379 6.6756 16.4102 6.98324C16.0545 7.31394 15.5771 7.5139 15.0529 7.5139H14.9686C14.4818 7.49083 14.0512 7.29087 13.7517 6.98324C13.4708 6.68329 13.293 6.29106 13.293 5.85269L13.3023 5.74502C13.3304 5.27588 13.5551 4.85289 13.8921 4.54526Z" fill={fill}/>
        </svg>
        </div>
    )
}
