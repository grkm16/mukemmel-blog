export default function TimeAgo(time = ""){
        /**
         * script by pfoduk;
         */
        if(time == "") time = Date.now();
        time = (new Date(time) ).getTime();

        const Times = [
            {t:1000,n:"Saniye"},
            {t:59, n:"Dakika"},
            {t:59,n:"Saat",},
            {t:23, n:"Gün"},
            {t:7,n:"Hafta"},
            {t:30,n:"Ay"},
            { t:11, n:"Yıl"}
        ];

        let currentTime = Date.now();
        let diff = currentTime - time;

        if((diff/1000) <= 5) return "az önce";
        let s = 1,i = 0;
        while(s < diff && i < Times.length){s *=  Times[i].t;i++;}
        for(let k = 0; k < i-1 ; k ++){diff /= Times[k].t;}
        return Math.floor(diff) + " "+Times[i-2].n + " önce ";
        
    }