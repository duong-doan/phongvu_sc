import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss'
import Banner from './Banner/Banner'
import BannerMenuLeft from './Banner/BannerMenuLeft/BannerMenuLeft';
import BannerAdsRight from './Banner/BannerAdsRight/BannerAdsRight';
import BannerAdsBottom from './Banner/BannerAdsBottom/BannerAdsBottom';
import SaleProduct from './SaleProduct/SaleProduct';
import BannerFullWidth from '../../components/BannerFullWidth/BannerFullWidth';
import OutstandBrand from './OutstandBrand/OutstandBrand';
import BigCardWrapProduct from '../../components/BigCardWrapProduct/BigCardWrapProduct';
import ProductItemAdsHorizontal from '../../components/ProductItemAds/ProductitemAdsHorizontal/ProductItemAdsHorizontal';
import BestSellProduct from './BestSellProduct/BestSellProduct';
import ProductForU from './ProductForU/ProductForU';
import Toolbar from '../Header/Toolbar/Toolbar';

const Main = (props) => {
    return (
        <div className="main">
            {/* Toolbar  */}
            <Toolbar isShowToolbar showSearch />

            {/* Banner wrap blow toolbar */}
            <Banner>
                <BannerMenuLeft />
                <BannerAdsRight />
                <BannerAdsBottom />
            </Banner>

            {/* Add space */}
            <div style={{ width: '100%', height: '100px' }}></div>

            {/* Section product sale hot */}
            <SaleProduct />

            {/* Banner promotion */}
            <Link to="/housewear" >
                <BannerFullWidth url="https://lh3.googleusercontent.com/_CGUSDQLhva8K007hq8GkX3v1EGq9PQDdw1YiU5uDwifFPPm0kIzNIzhXAUZv8RZ-ycvJ6YoZys1db-nckjKeQpOhFI_HQE=w1232-rw" />
            </Link>

            {/* Outstanding brand product */}
            <OutstandBrand />

            {/* Section sub-product part 1 */}
            <div className="main__wrap-bigCardWrap">
                <Link to="/listLaptop">
                    <BigCardWrapProduct
                        title="LAPTOP - MACBOOK"
                        urlBanner="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/24/20210224_621a7320-ab2f-4c19-844f-767b374c59df.jpg"
                        dataCardSmall=
                        {[
                            {
                                urlImg: 'https://lh3.googleusercontent.com/jKndbh-fBd-5W8n_yoN14NSHxkcjqBWiRAvG23pir2zRSDDTmH3CCGqvx8Oy6clWFN5ky7Ha5cZILkWHOCc=rw',
                                name: 'MSI Gaming',
                                subTitle: 'Sức mạnh từ nhà rồng'
                            },
                            {
                                urlImg: 'https://phongvu.vn/media/wysiwyg/Hoang/CateBL/T112020/Hp.jpg',
                                name: 'Lễ Hội HP',
                                subTitle: 'Siêu khuyến mãi'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/L8y-Pqy8Vfz_bEOG1vG7KD-EANCUk67ZH00jUwUmxXGa0pdpaBmtcfw5aeA-Pd8ZsM1zWjr6ZLyv7UB_aHrG=rw',
                                name: 'LG Gram',
                                subTitle: 'Siêu nhẹ siêu tiện lợi'
                            },
                            {
                                urlImg: 'https://phongvu.vn/media/wysiwyg/Hoang/CateBL/T10/X1carbon2.jpg',
                                name: 'Lenovo',
                                subTitle: 'Dành cho doanh nhân'
                            }
                        ]} />
                </Link>

                <Link to="/accessories">
                    <BigCardWrapProduct
                        title="PC - MÀN HÌNH - LINH KIỆN MÁY TÍNH"
                        urlBanner="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/24/20210224_97bab5d4-613b-4f75-9fb0-3526eaa01461.jpg"
                        dataCardSmall=
                        {[
                            {
                                urlImg: 'https://phongvu.vn/media/wysiwyg/Hoang/uat/Case.jpg',
                                name: 'PC Phong Vũ',
                                subTitle: 'Làm việc chuẩn mực'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/XxDJwOJHaAR_KmlmtBqm_fOvJWWZqWsP3Rvenc5noH75Ec1hc1HWZbSPpYnQYW8UzAcBV0w9HAUalFasEwI=w500-rw-rw',
                                name: 'SSD',
                                subTitle: 'Sale tới 50%'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/qLA0d-t0G8qH3qsEN0HrxpiQhYh_xU4iVLuyChk4UZaGq85zzLdDxBM65TcY37p5Vf99Oy9MMZNTQDms558=w500-rw-rw',
                                name: 'Màn Hình Gaming',
                                subTitle: 'Chỉ từ 4690K'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/_yRbsdjQgNybFkO4FngxvPOvu1AdDVaoxzw7xjBTRxa6jPbtk0UgyOAgnO0mVUnG8PBCbQp7KgSctVvYV8Y=w500-rw-rw',
                                name: 'RTX 30 Series',
                                subTitle: 'Hiệu năng vượt bậc'
                            }
                        ]} />
                </Link>

            </div>

            {/* Banner promotion */}
            <Link to="/accessories">
                <BannerFullWidth url={'https://lh3.googleusercontent.com/d5vzKrBxFEswNHhqJ9pWKpZvFc90_0tyjDNXjY3FpGzUVZWDt4n1YhXxjOxgu0kHFvqYOrfojaHBKYonMa9M3gF7r1YoYAWD=w1232-rw'} />
            </Link>

            {/* Section sub-product part 2*/}
            <div className="main__wrap-bigCardWrap">
                <Link to="/housewear">
                    <BigCardWrapProduct
                        title="TIVI - ĐIỆN MÁY - GIA DỤNG"
                        urlBanner="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/24/20210224_3d320caa-864e-4368-9b8a-765ca62b982c.jpg"
                        dataCardSmall=
                        {[
                            {
                                urlImg: 'https://lh3.googleusercontent.com/3k5j18WOkt5aNtfMYPZkiA2amNhhWO22UTa6peW3CRnlROqBnTxGpw-FZHMoVFFUcYNk67fnBdPKk9gybw=w500-rw-rw',
                                name: 'Smart Tivi',
                                subTitle: 'Sale khủng lên tới 50%++'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/2kFsZsysuQm1vsWedrdBzu2UjZrjrvAVXDZif7lB2Yc6cAyhZnWIlDbfXqFhMSLuwv68qKplZY4egbZ3kWw=w500-rw',
                                name: 'Tủ Lạnh',
                                subTitle: 'Cho thực phẩm luôn tươi'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/ApMHrZGuAPA8BKKp_sR7Ww0WD50OrJ76iv58EP-ps5knrNqpKAMimPZ61-rZ02tbKeLJiChWSZfPJ09SEZXA=rw',
                                name: 'Máy Lọc Không Khí',
                                subTitle: 'Cho không gian xanh sạch'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/vT5OrcGZYLO0Ziaew06EMqbktCKwprHO10MY-YfWwqXeseG86HFXgmYHlAr-C0Kg_VAVOy7zyMrR-psjMBVF84e7Wt46Mh0F=w500-rw-rw',
                                name: 'Máy Hút Bụi Cầm Tay',
                                subTitle: 'Tiện dụng mọi lúc, giá chỉ từ 449K'
                            }
                        ]} />
                </Link>

                <Link to="/listPhone">
                    <BigCardWrapProduct
                        title="ĐIỆN THOẠI - MÁY ẢNH - THIẾT BỊ THÔNG MINH"
                        urlBanner="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/24/20210224_398914e7-ba27-4da4-b40f-3365a4475443.jpg"
                        dataCardSmall=
                        {[
                            {
                                urlImg: 'https://lh3.googleusercontent.com/G2xEk3lEDG544ui40LdnWl46CihRdD2DYOwzsz4CveppPV_poCEfPgptoDtHPpbvVmADQcOCwl_IcIBmfmMLofUO86gQFcWI=w500-rw-rw',
                                name: 'Samsung Galaxy',
                                subTitle: 'Giảm ngay 2000K Note 10+ và S21 Ultra'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/Lji9yh8e2VIYfT1JIzPctWZ4kVf9T4RRTQJYURCO1Sw734BJoUfgtH8jmRvDYs77xHvSb5RQFjJNyYkYWycWOw_CaclpWAZO=w500-rw-rw',
                                name: 'Tablet',
                                subTitle: 'Tập trung làm việc muôn nơi'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/0TRaDI2MH_wRsCTGuT4uez0fNsZ9T426ZqUv7QV6aRW43hZjgu1cr0dg7zg8zpP1Rbp_ERh91FidHvOnkA=w500-rw-rw',
                                name: 'Máy Ảnh',
                                subTitle: 'Lưu giữ khoảnh khắc'
                            },
                            {
                                urlImg: 'https://phongvu.vn/media/wysiwyg/Hoang/CateBL/122020/applese.jpg',
                                name: 'Smartwatch',
                                subTitle: 'Năng động và phong cách'
                            }
                        ]} />
                </Link>
            </div>

            {/* Section sub-product part 3*/}
            <div className="main__wrap-bigCardWrap">
                <Link to="/accessories">
                    <BigCardWrapProduct
                        title="LOA - TAI NGHE - THIẾT BỊ NGOẠI VI"
                        urlBanner="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/24/20210224_c47f2440-b2b4-4ea7-9357-25baa0481dc1.jpg"
                        dataCardSmall=
                        {[
                            {
                                urlImg: 'https://lh3.googleusercontent.com/0-E5Fo9SKhAFknEetUN64y0NcMuZ4ciM5tgTN0KoU1Z5Vc_5HPvVGcF34vVVtBrdUYOOOKFdZ6m6zQ5xXoE=w500-rw-rw',
                                name: 'Chuột Gaming',
                                subTitle: 'Giá vàng trong tầm tay, giảm ngay tới 45%'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/tcm-T3snGTDjkvD2l7LuRjGGlAIE9CE5b7BNGrWWqYLc6JaqSLIwHiVPA6HVQ0HM3yuxcsM-FcLAfg6awc0=w500-rw-rw',
                                name: 'Bose',
                                subTitle: 'Chỉ từ 2.490K'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/5OV_8f3vM7TdXOF6AJQg4E0a5oElzGsFdR8VfpsTg4SH7GxvRxlKK8stLFeSVKR7bwspAURkaGrkgCmf1_RU=w500-rw',
                                name: 'Ổ Cứng Di Động',
                                subTitle: 'Giảm hơn 300k'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/zZKjOLiCjl2hcAYo5FD78NFafZ2ZxBNELmVDil_kdHNx2M3XU09APVqDUKoTDujS-PPdXQxy4fB85ea-ULS4=w500-rw-rw',
                                name: 'Bàn Phím Gaming',
                                subTitle: 'Tiết kiệm tới 650.000Đ'
                            }
                        ]} />
                </Link>

                <Link to="/accessories">
                    <BigCardWrapProduct
                        title="THIẾT BỊ MẠNG - VĂN PHÒNG"
                        urlBanner="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2021/2/24/20210224_5c805339-6426-4d92-8275-25ab055acbe8.jpg"
                        dataCardSmall=
                        {[
                            {
                                urlImg: 'https://lh3.googleusercontent.com/TKL0LvHhlJl8wmmc20xFuz8WIWS_HGVwhfbwuvcAYsHhkp2UuuIpWMCgKU5RStN4wvgkHQkjs8eJtlfkxP5aMCOapcMKolza=w500-rw-rw',
                                name: 'PC Văn Phòng',
                                subTitle: 'Cấu hình tốc độ, giá từ 4990K '
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/Gs5NryyYofPUGeAk7q5lytqJonL279aSdQ4ZpB_fORgKmg1Jvmn3BrL8kvN5WNnHrBoDLAcw2iiZ140Y08U=w500-rw-rw',
                                name: 'Combo Máy In',
                                subTitle: 'Giải pháp doanh nghiệp'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/8FvX_H9rqruSC2SwqarAFChwoXa9x3SpaBQJBOsDAHO4AcfCKAsoLaitPWbMkPNvLX8ujmSQh9ngju_dEMY=w500-rw-rw',
                                name: 'Phần Mềm Bản Quyền',
                                subTitle: 'Bảo mật chuyên nghiệp, chi phí phải chăng'
                            },
                            {
                                urlImg: 'https://lh3.googleusercontent.com/cpdV3UPw12sNrZjLfuWk6AL4D8krFA7zaHzHhTGPO_GwVz0RdBxp46u2cHLCarlNKwXAvVpI7HMQ_Vn1KTmc=w1000-rw-rw',
                                name: 'Giải Pháp Camera',
                                subTitle: 'An ninh toàn diện'
                            }
                        ]} />
                </Link>
            </div>

            {/* Section wrap banner promotion 3 item */}
            <div className="main__wrap-productItemHorizontalBigger">
                <Link to="/accessories">
                    <ProductItemAdsHorizontal url={'https://lh3.googleusercontent.com/TJVYcAYb3P_SwTUJiaKSycp5q1MHY4NbCb68ewM0pIfFCJLi9irNodzIBo1dTlt-FVnFx5EgpND7xrmTgGctyz_OPWz0TTI=w411-rw'} />
                </Link>
                <Link to="/accessories">
                    <ProductItemAdsHorizontal url={'https://lh3.googleusercontent.com/UHTkZY7ZRMi2_SuSOlfz9vYZBx8FW07rZuqWpIMi9nZ0MawrMEhD_6h7mYal6a8TIGywt6D1e04EFVTHcWyvwdnVIEq1gwUVnA=w411-rw'} />
                </Link>
                <Link to="/accessories">
                    <ProductItemAdsHorizontal url={'https://lh3.googleusercontent.com/I5k0upfhpdhDh6CpvAagvvZjBAuz39gUkzGXn9qyJ6Y9EI9NUoc_6ersAtgdbD0hVjVHd8rVqfRzQ8DV1mY-rLM57OSIxHE=w411-rw'} />
                </Link>
            </div>

            {/* Section hot-product */}
            <BestSellProduct />

            {/* Section other product */}
            <ProductForU />
            {props.children}
        </div>
    )
}

export default Main
