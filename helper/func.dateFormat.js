export default function dateFormat(date="",format= "G UA Y" ){
    /*
        scripts by pfoduk ; 

        FORMATS:
        G => gün
        A => ay
        Y => yıl
        UG => günün ismi
        UA => ayın ismi
    */
   try{
    date = new Date(date);
   }catch(Exception){
       date = new Date();
   }
   const Months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
   const Days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    const Da = {
        G:(t) => t.getDate(),
        A:(t) => t.getMonth() + 1,
        Y:(t) => t.getFullYear(),
        UG:(t) => Days[t.getDay()],
        UA:(t) => Months[t.getMonth()]
    }

    let str = format
                .trim()
                .split(' ')
                .filter(f => Da[f] != null)
                .map(f => Da[f] ? Da[f](date): null)
                .join(' ');
    // return example; 23 Aralık 2020
    return str;
}