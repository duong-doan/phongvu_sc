import React from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.scss'

const Sidebar = () => {
    const arrMenuSidebar = [
        {
            imgUrl: 'https://lh3.googleusercontent.com/YPRilsUoP8qUlqo5pP9qiIVT3GztqhJE8JnEqKc1nheAxqtJRy9Hdw2WuSuktg5Hf4wnK1aWvbBobrF4Lg=w50-rw',
            title: 'Điện máy - Điện gia dụng',
            endPoint: 'housewear'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/HlvqHeKrnQcQews3r-pJDg78HfAqQ3bF29HynFvmsiYAEjjaw1S71s5xNhp9ci2gbOw4cHGpgU_rMUtlO3U=w50-rw',
            title: 'Laptop & Macbook',
            endPoint: 'listLaptop'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/cM5lP27Q3TudfM_zH6Y3TMehQDvhQUO73MxuyvV-pKnHs0P0pDo-jHWcCY4wy3FzgUJ5h-VL3I7p-b5EtpQ=w50-rw',
            title: 'Tivi - Màn hình TV',
            endPoint: 'housewear'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/dkzFFaKYmPLLkPnC-cyefC1u1Qh0Iy_6Loz7adsbIMs-KAK8FA_PwUOklM3gEppESc1uSeaTa63U4Vejifo=w50-rw',
            title: 'Điện thoại & Thiết bị thông minh',
            endPoint: 'phoneProduct'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/bmh_GK8zYyE-iFFqXFifHBgXqo8e4hZMHoxjims0WbjhsFMCTrKTi--nb7DZ8WBkzXlQZRlYZu6YQyPYpduf=w50-rw',
            title: 'PC - Máy tính đồng bộ',
            endPoint: 'laptop'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/iRXHBhcy0POD2QZ8HdjIsEhi_PyXoTkDja7HNcASAffs8SFIDCpibFnhDOYLSOtLEFMFrUMTl6LAG9bTBjLX=w50-rw',
            title: 'Màn hình máy tính',
            endPoint: 'accessories'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/E8-60MiG4OduP7DyMTdMEdCWEe34sGNJoCCInwqob_5uCcYk1TqMzHlJuURHYGMjSohgUmhiyQOKMAqqDw=w50-rw',
            title: 'Linh kiện máy tính',
            endPoint: 'accessories'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/qtC62XnXkTsyJbMok7Z7Uu5GOPvhqslzU5YscZZ0HvorTWRs0Qg5s8gWU6l6CTcmc-pQA2y1myJCZ92t9VDq=w50-rw',
            title: 'Hi-End Gaming',
            endPoint: 'accessories'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/WpwvoWTSzoEzFLm7Yqus_aakVaJxDBgDGXBQTeZLOw_Gk5xTYrtTBdVmIttUJ_-ZwAlWs6rvUnJD24p6tQ=w50-rw',
            title: 'Phụ kiện & Thiết bị ngoại vi',
            endPoint: 'accessories'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/XO5k-tA6oI4Cb9cM-xqcytNL6JJL9twUaAcvkkSI34M4in7HCUowxUNb5jg6DNrBBo4USJmb1cMEMbhedBQ=w50-rw',
            title: 'Thiết bị âm thanh',
            endPoint: 'accessories'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/kpwSAevTNcuxbW8wa4Wthkw1Tvi37ebTlm3ULD9MzcvWLmL-IxHQajG1Tw5enhQPCc767cTt-Hfkc_oxVjQ=w50-rw',
            title: 'Máy ảnh - Máy quay phim',
            endPoint: 'accessories'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/BUbooruRWezoEwN2qjqve0RyQXSl3-tyFjx8961QaIC-vhpGoo74BeDK8UGsU7bm5KSHXwxMmWu5bGlKxZh_=w50-rw',
            title: 'Thiết bị văn phòng',
            endPoint: 'accessories'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/oXamqsHZNkbDLU3Art6nz2CHHnkpARjPrj4ksbWRNPzxoRtq9UMzZNKuhyMETcpn4NJZ1A8UAEffq6p_mg=w50-rw',
            title: 'Thiết bị mạng - An ninh',
            endPoint: 'accessories'
        },
        {
            imgUrl: 'https://lh3.googleusercontent.com/xQNTUsKuQP8S_IoRbjRIN28exoDh8lx7reM4I4XpGP7ZPqSDKN8gxhKemblPrKX_-INp9Wu1Q6MnWe3-hjgW=w50-rw',
            title: 'Khách hàng doanh nghiệp',
            endPoint: 'housewear'
        }
    ]

    return (
        <div className="main__sidebar">
            <ul>
                {
                    arrMenuSidebar.map(item => (
                        <Link key={item.title} to={`/${item.endPoint}`}>
                            <li>
                                <img src={item.imgUrl} />
                                <span>{item.title}</span>
                            </li>
                        </Link>
                    ))
                }

            </ul>
        </div>
    )
}

export default Sidebar
