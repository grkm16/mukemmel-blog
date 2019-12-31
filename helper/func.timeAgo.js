export default function TimeAgo(time = "2019-12-29T19:55:45.557Z"){
        /**
         * script by pfoduk;
         */
        time = (new Date(time) ).getTime();

        const Times = [
            {
              t:1000,
              n:"Saniye"  
            },
            {
                t:60,
                n:"Dakika"
            },
            {
                t:60,
                n:"Saat",
            },
            {
                t:24,
                n:"Gün"
            },
            {
                t:30,
                n:"Ay"   
            },
            {
                t:12,
                n:"Yıl"
            }
        ];

        let currentTime = Date.now();
        let diff = currentTime - time;
        let s = 1,i = 0;

        while(s < diff && i < Times.length){s *=  Times[i].t;i++;}
        for(let k = 0; k < i-1 ; k ++){diff /= Times[k].t;}
        return Math.floor(diff) + " "+Times[i-2].n + " önce ";



        
    }