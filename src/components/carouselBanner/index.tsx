'use client'
import { Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/scss'
import Link from "next/link"

import Image from 'next/image'

import style from "./styles.module.scss"
import imageBlog from "@/assets/image/blog.jpg"
import imageContact from "@/assets/image/contact.jpg"
import imageShoop from "../../assets/image/shoop.jpg"

// import 'swiper/scss/navigate'
// import 'swiper/scss/pagination'
// import 'swiper/swiper.scss'; 
// import 'swiper/modules/navigation/navigation.scss'; 
// import 'swiper/modules/pagination/pagination.scss'; 

export default function CarouselBanner() {

  SwiperCore.use([Autoplay])
  
  return (

    <div className={style.container}>
      <Swiper
        modules={[Navigation, Pagination]}
    
        navigation
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay:3500
        }}
        >
        <SwiperSlide className={style.container_image}>
          <span></span>
          <div>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium pariatur sequi possimus eius autem cupiditate cum officia libero, ipsa ea! Pariatur expedita a odit amet, mollitia nam consequuntur earum!</h6>
            <Link  href={`/blog/posts`}> Acessar Loja </Link>

          </div>
          <Image
            src={imageShoop}
            alt='image do mercado'
          />
        </SwiperSlide>

        <SwiperSlide className={style.container_image}>
          <span></span>
          <div>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium pariatur sequi possimus eius autem cupiditate cum officia libero, ipsa ea! Pariatur expedita a odit amet, mollitia nam consequuntur earum!</h6>

            <Link  href={`/blog/posts`}> Acessar Loja </Link>

          </div>
          <Image
            src={imageContact}
            alt='image do contact'
          />
        </SwiperSlide>

        <SwiperSlide className={style.container_image}>
          <span></span>
          <div>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium pariatur sequi possimus eius autem cupiditate cum officia libero, ipsa ea! Pariatur expedita a odit amet, mollitia nam consequuntur earum!</h6>

            <Link  href={`/blog/posts`}> Acessar Blog </Link>

          </div>
          <Image
            src={imageBlog}
            alt='image do blog'
          />
        </SwiperSlide>

      </Swiper>
    </div>

  );
}

