import React from 'react';
import YouTube from 'react-youtube';
import Slider from "react-slick";
import "/Users/shomamizutani/my-app2/src/App.css"
import { useState, useEffect } from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import unko1 from "/Users/shomamizutani/my-app2/src/assets/images/arsenalbackgroundpic.jpg"
import unko2 from "/Users/shomamizutani/my-app2/src/assets/images/arsenalbackgroundpic2.jpg"
import unko3 from "/Users/shomamizutani/my-app2/src/assets/images/arsenalbackgroundpic3.jpg"

function App() {
    const START_TIME = 0;  // 開始時間（秒）
    const END_TIME = 30;    // 終了時間（秒）

    const videoOptions = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,  // 自動再生
            start: START_TIME,  // 開始時間
            end: END_TIME,  // 終了時間
            mute: 1  
        },
    };

    const images = [
        unko1,
        unko2,
        unko3
    ];
    

    // スライドの設定
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);  // 5秒ごとに画像を変更

        return () => clearInterval(timer);  // コンポーネントのアンマウント時にタイマーをクリア
    }, []);


    return (
        // <div className="App">
        //     {/* スライドショー */}
        //     <Slider {...settings}>
        //         <div>
        //             <img src={unko1} alt="Supporter 1" className='background-image'/>

        //         </div>
        //         <div>
        //             <img src={unko2} alt="Supporter 2" className='background-image'/>
        //         </div>
        //         <div>
        //             <img src={unko3} alt="Supporter 3" className='background-image'/>
        //         </div>
        //     </Slider>

        //     {/* YouTube動画の特定の部分だけの再生 */}
        //     <YouTube
        //         videoId="Y0Qt8xn9MCs"
        //         opts={videoOptions}
        //     />
        // </div>
        <div className='background' style={{backgroundImage: `url(${images[currentImageIndex]})`, height:1000, width:1200}}>
        <h1>ohayou unko</h1>
        <YouTube
                videoId="Y0Qt8xn9MCs"
                opts={videoOptions}
            />

    </div>

        
    );
}

export default App;
